/**
 * Build-time GitHub data. Every call fails soft (returns null/empty) so a
 * network hiccup or rate limit never breaks the build — the related UI
 * simply hides itself.
 */

const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;

async function getJSON<T>(url: string, withAuth = false): Promise<T | null> {
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
    if (withAuth && token) headers.Authorization = `Bearer ${token}`;
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(8000) });
    if (!res.ok) {
      console.warn(`[github] ${res.status} ${url}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[github] failed ${url}:`, (err as Error).message);
    return null;
  }
}

export interface RepoInfo {
  full_name: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
}

const repoCache = new Map<string, Promise<RepoInfo | null>>();

/** Public repo metadata (stars, language). `fullName` = "owner/name". */
export function getRepo(fullName: string): Promise<RepoInfo | null> {
  let p = repoCache.get(fullName);
  if (!p) {
    p = getJSON<RepoInfo>(`https://api.github.com/repos/${fullName}`, true);
    repoCache.set(fullName, p);
  }
  return p;
}

export interface UserInfo {
  public_repos: number;
  followers: number;
  created_at: string;
}

let userPromise: Promise<UserInfo | null> | undefined;
export function getUser(login: string) {
  userPromise ??= getJSON<UserInfo>(`https://api.github.com/users/${login}`, true);
  return userPromise;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

let contribPromise: Promise<{ total: number; days: ContributionDay[] } | null> | undefined;

/**
 * Last-year contribution calendar via the public github-contributions-api
 * (scrapes the public profile graph; no token required).
 */
export function getContributions(login: string) {
  contribPromise ??= (async () => {
    const data = await getJSON<{ total: Record<string, number>; contributions: ContributionDay[] }>(
      `https://github-contributions-api.jogruber.de/v4/${login}?y=last`,
    );
    if (!data?.contributions?.length) return null;
    return { total: data.total?.lastYear ?? 0, days: data.contributions };
  })();
  return contribPromise;
}
