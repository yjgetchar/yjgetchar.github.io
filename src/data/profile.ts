/**
 * ✏️  사이트 콘텐츠는 대부분 이 파일 하나에서 관리합니다.
 *     (프로젝트 상세 내용은 src/content/projects/*.md)
 *
 * TODO 표시가 있는 항목은 실제 정보로 바꿔 주세요.
 */

export const profile = {
  /** GitHub 사용자명 — 빌드 시 레포/기여 데이터를 가져올 때 사용 */
  github: 'yjgetchar',

  name: 'Younjae Lee',
  koreanName: '이윤재',
  /** LinkedIn 직무 */
  role: 'System Software Engineer',
  /** 사이드바 이름 아래 한 줄 소개 */
  tagline: 'AI로 반복을 줄이고, 함께 즐길 수 있는 제품을 만듭니다.', // TODO
  /** SEO description · 소개 페이지 첫 문단 */
  intro:
    '삼성전자에서 8년 넘게 임베디드 시스템과 Android/Linux를 다뤄 온 시스템 소프트웨어 엔지니어입니다. 퇴근 후에는 Gemini 기반 AI 에이전트부터 실시간 웹 파티 게임까지, 기획에서 배포까지 직접 만듭니다.',
  location: 'Seoul, KR',
  timezone: 'Asia/Seoul',
  /** 프로필 사진: src/assets/profile/avatar-3d.jpg(기본), avatar-photo.jpg(클릭하면 전환) */

  /** 공개해도 되는 연락처만 남겨 주세요. 비워두면 표시되지 않습니다. */
  email: '', // TODO: 예) 'hello@example.com'
  socials: [
    { label: 'GitHub', href: 'https://github.com/yjgetchar', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/younjae-lee', icon: 'linkedin' },
    // { label: 'Blog', href: 'https://....tistory.com', icon: 'blog' },
  ] as const,
} as const;

export const linkedin = profile.socials.find((s) => s.icon === 'linkedin')!.href;

/**
 * 오른쪽 맨 위 캐치프레이즈 (포트폴리오 타이틀)
 * lead는 흰 글씨, accent는 에메랄드 그라데이션으로 표시됩니다.
 */
export const hero = {
  eyebrow: 'yj.getchar()',
  lead: 'Slow is Fast in AI',
  accent: '— Just Do AI.',
  sub: '원리와 기본을 단단하게 다질 때, AI는 가장 빠르고 확실한 제품이 됩니다. 고민은 짧게, 실행은 AI와 함께.',
} as const;

/**
 * About 문단 (사이드바 · 모바일 프로필 카드). 문자열은 그대로, { badge } 항목은 아이콘 배지로 표시됩니다.
 */
export type AboutPart = string | { badge: string; emoji: string };
export const about: AboutPart[] = [
  '2018년부터 ',
  { badge: 'Samsung Electronics', emoji: '🏢' },
  '에서 ',
  { badge: 'System Software Engineer', emoji: '⚙️' },
  '로 일하며 임베디드 시스템과 Android/Linux를 다뤄 왔어요. 퇴근 후에는 ',
  { badge: 'AI 에이전트', emoji: '🤖' },
  '와 ',
  { badge: '실시간 웹 게임', emoji: '⚡' },
  '을 만듭니다.',
];

/** About 아래 요약 (LinkedIn 공개 프로필 기준) */
export const aboutFacts: { label: string; value: string }[] = [
  { label: '직무', value: 'System Software Engineer · Samsung Electronics' },
  { label: '분야', value: 'Embedded Systems · Android/Linux' },
  { label: '경력', value: '8년+ (2018.08 – 현재)' },
];

/** Experience — 회사 로고 대신 이니셜 배지로 표시합니다. */
export interface Job {
  company: string;
  initial: string;
  /** 배지 배경색 */
  color: string;
  role?: string;
  period: string;
  current?: boolean;
  /** 한두 줄 설명 (선택) */
  body?: string;
}
export const experience: Job[] = [
  {
    company: 'Samsung Electronics',
    initial: 'S',
    color: '#1428a0',
    role: 'System Software Engineer',
    period: '2018.08 — Present',
    current: true,
    body: '임베디드 시스템과 Android/Linux 기반 시스템 소프트웨어를 개발합니다.',
  },
  { company: 'Naver Business Platform', initial: 'N', color: '#03c75a', role: 'Intern', period: '2018.05 — 2018.06' },
  { company: 'AhnLab', initial: 'A', color: '#0b6bcb', role: 'Intern', period: '2017.12 — 2018.05' },
];

/** 잘하는 일 — 소개 페이지 카드 */
export const expertise: { emoji: string; title: string; body: string; tags: string[] }[] = [
  {
    emoji: '🤖',
    title: 'AI 에이전트 & 자동화',
    body: 'LLM을 실제 업무 흐름에 연결해요. Search Grounding, 세션 유지, 화이트리스트 보안까지 갖춘 텔레그램 에이전트를 만들어 운영합니다.',
    tags: ['Gemini API', 'Python', 'Telegram Bot'],
  },
  {
    emoji: '🎮',
    title: '실시간 웹 & 게임',
    body: 'PC 화면과 스마트폰 컨트롤러를 WebSocket으로 잇는 파티 게임 엔진처럼, 지연에 민감한 인터랙티브 웹을 만들어요.',
    tags: ['TypeScript', 'WebSocket', 'Web Audio'],
  },
  {
    emoji: '🧩',
    title: '제품 엔지니어링',
    body: '계약 우선 설계와 테스트 주도 개발로, 빠르게 출시하면서도 확장 가능한 구조를 지켜요.',
    tags: ['TDD', 'Contract-First', 'GitHub Actions'],
  },
];

/** 기술 스택 (About 마키 · 소개 페이지) */
export const stack = [
  'TypeScript',
  'Python',
  'Gemini',
  'Astro',
  'WebSocket',
  'Node.js',
  'Telegram Bot',
  'Web Audio',
  'Tailwind CSS',
  'Vitest',
  'GitHub Actions',
  'Git',
];

/** 섹션 on/off */
export const sections = {
  about: true,
  experience: true,
  projects: true,
  contact: true,
} as const;

/** 사이드바 내비게이션 — 홈의 섹션 id 와 맞춰 주세요. About은 사이드바에 항상 보이므로 모바일 메뉴에만 따로 넣습니다. */
export const nav = [
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const;

export const site = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name} · ${profile.intro}`,
  ogImage: '/images/og-default.png',
  locale: 'ko_KR',
} as const;
