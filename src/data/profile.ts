/**
 * ✏️  사이트 콘텐츠는 대부분 이 파일 하나에서 관리합니다.
 *     (프로젝트 상세 내용은 src/content/projects/*.md)
 *
 * TODO 표시가 있는 항목은 실제 정보로 바꿔 주세요.
 */

export type Tint = 'blue' | 'mint' | 'peach' | 'lavender' | 'butter' | 'rose';

export const profile = {
  /** GitHub 사용자명 — 빌드 시 레포/기여 데이터를 가져올 때 사용 */
  github: 'yjgetchar',

  name: 'Younjae Lee', // TODO: 한글 이름을 쓰고 싶다면 교체 (예: '이윤재')
  shortName: 'Younjae',
  greeting: '안녕하세요, 윤재입니다 👋', // TODO
  role: 'AI Automation & Product Developer', // TODO
  headline: 'AI와 함께,\n아이디어를 제품으로.', // TODO
  intro:
    'Gemini 기반 AI 에이전트부터 실시간 웹 파티 게임까지, 기획에서 배포까지 직접 만듭니다. 반복되는 일은 자동화하고, 사람들이 함께 즐길 수 있는 경험을 만드는 데 관심이 많아요.', // TODO
  location: 'Seoul', // TODO
  timezone: 'Asia/Seoul',
  avatar: '/images/avatar.svg', // TODO: public/images/ 에 사진을 넣고 경로 변경

  /** 공개해도 되는 연락처만 남겨 주세요. 비워두면 표시되지 않습니다. */
  email: '', // TODO: 예) 'hello@example.com'
  socials: [
    { label: 'GitHub', href: 'https://github.com/yjgetchar', icon: 'github' },
    // { label: 'LinkedIn', href: 'https://linkedin.com/in/...', icon: 'linkedin' },
    // { label: 'Blog', href: 'https://....tistory.com', icon: 'blog' },
  ] as const,
} as const;

/** 잘하는 일 — 파스텔 벤토 카드 */
export const expertise: { emoji: string; title: string; body: string; tags: string[]; tint: Tint }[] = [
  {
    emoji: '🤖',
    title: 'AI 에이전트 & 자동화',
    body: 'LLM을 실제 업무 흐름에 연결해요. Search Grounding, 세션 유지, 화이트리스트 보안까지 갖춘 텔레그램 에이전트를 만들어 운영합니다.',
    tags: ['Gemini API', 'Python', 'Telegram Bot'],
    tint: 'lavender',
  },
  {
    emoji: '🎮',
    title: '실시간 웹 & 게임',
    body: 'PC 화면과 스마트폰 컨트롤러를 WebSocket으로 잇는 파티 게임 엔진처럼, 지연에 민감한 인터랙티브 웹을 만들어요.',
    tags: ['TypeScript', 'WebSocket', 'Web Audio'],
    tint: 'peach',
  },
  {
    emoji: '🧩',
    title: '제품 엔지니어링',
    body: '계약 우선 설계와 테스트 주도 개발로, 빠르게 출시하면서도 확장 가능한 구조를 지켜요.',
    tags: ['TDD', 'Contract-First', 'GitHub Actions'],
    tint: 'mint',
  },
];

/** 걸어온 길 */
export const timeline = [
  // TODO: 실제 경력·학력으로 교체
  {
    period: '2026 — 현재',
    title: 'Independent Developer',
    org: 'Side Projects',
    body: 'AI 에이전트, 콘텐츠 자동화, 웹 파티 게임 등 개인 프로젝트를 기획·개발·운영.',
    kind: 'work',
  },
  {
    period: '20XX — 20XX',
    title: '직무 / 포지션',
    org: '회사 이름',
    body: '담당 업무와 주요 성과를 한두 줄로 적어 주세요.',
    kind: 'work',
  },
  {
    period: '20XX — 20XX',
    title: '전공 / 학위',
    org: '학교 이름',
    body: '관련 활동이나 수상 내역이 있다면 함께 적어 주세요.',
    kind: 'edu',
  },
] as const;

/** 기술 스택 (벤토 마키 + 별자리 위젯) */
export const stack = [
  'TypeScript',
  'Python',
  'Gemini',
  'Astro',
  'WebSocket',
  'Node.js',
  'Telegram',
  'Web Audio',
  'Tailwind',
  'Git',
  'Vitest',
  'GitHub Actions',
  'LLM',
  'Automation',
];

/** 섹션 on/off */
export const sections = {
  projects: true,
  expertise: true,
  timeline: true,
  contact: true,
} as const;

export const nav = [
  { label: '소개', href: '/about' },
  { label: '프로젝트', href: '/projects' },
  { label: '연락하기', href: '/#contact' },
] as const;

export const site = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.name} · ${profile.intro}`,
  ogImage: '/images/og-default.png',
  locale: 'ko_KR',
} as const;

/** Tailwind class lookup for tints (kept static so Tailwind can see them) */
export const tintBg: Record<Tint, string> = {
  blue: 'bg-t-blue',
  mint: 'bg-t-mint',
  peach: 'bg-t-peach',
  lavender: 'bg-t-lavender',
  butter: 'bg-t-butter',
  rose: 'bg-t-rose',
};
