# yjgetchar.github.io

Younjae Lee의 개인 포트폴리오 사이트 → **https://yjgetchar.github.io**

데스크톱은 **왼쪽 고정 사이드바**(프로필, GitHub/LinkedIn, About, 섹션 내비)와 오른쪽 스크롤 영역(지금 만드는 중 → Experience → Projects → Contact), 모바일은 맨 위 프로필 카드로 접히는 구성입니다(A안 · 실속형). 오른쪽 아래 **Ask AI** 버튼은 `profile.ts`에 미리 적어 둔 질문과 답변으로 동작해서 서버나 API 키가 필요 없습니다.
Astro + Tailwind CSS로 만들었고, GitHub Actions로 GitHub Pages에 자동 배포합니다.

디자인 결정 사항과 남은 선택지는 [`docs/DESIGN_LOG.md`](docs/DESIGN_LOG.md)에 정리합니다.

## 콘텐츠 수정하기

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 이름, 직무, About 문단과 요약(LinkedIn 기준), 기술 스택, 경력 | [`src/data/profile.ts`](src/data/profile.ts) |
| 프로젝트 추가·수정 | [`src/content/projects/*.md`](src/content/projects) |
| 프로젝트 커버 이미지 | [`src/assets/projects/`](src/assets/projects) (빌드할 때 WebP로 자동 변환) |
| 프로필 사진 | [`src/assets/profile/`](src/assets/profile)의 `avatar-3d.jpg`(기본)와 `avatar-photo.jpg`(클릭하면 뒤집혀 보이는 사진) 교체 (정사각형 권장) |
| 색상·폰트 | [`src/styles/global.css`](src/styles/global.css) 상단 토큰 (zinc + 에메랄드) |

### 프로젝트 추가 예시

`src/content/projects/my-project.md`

```md
---
title: My Project
summary: 한 줄 소개
category: Web        # AI | Game | Automation | Web | Tool
cover: ../../assets/projects/my-project.jpg   # 세로/가로 비율이 달라도 OK (메이슨리)
tint: blue           # blue | mint | peach | lavender | butter | rose
tags: [TypeScript, React]
repo: yjgetchar/my-project      # 공개 레포면 스타 수가 자동 표시
demo: https://yjgetchar.github.io/my-project
status: Live         # Live | Released | In Progress | Archived | Private
featured: true       # 메인에 노출
order: 5
date: 2026-10-01
highlights:
  - 핵심 성과 1
  - 핵심 성과 2
---

## 개요
본문은 자유롭게 Markdown으로 작성합니다.
```

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 타입 체크 + 정적 빌드 → dist/
```

## 구조

```
src/
├── assets/       projects/*.jpg (커버 이미지), profile/avatar-3d.jpg · avatar-photo.jpg
├── components/   Sidebar, ProfileCard, Avatar, AboutCard, NowStrip, ExperienceList, ProjectCard, AskAI, Footer, GitHubActivity, SectionTitle, Icon
├── content/      projects/*.md
├── data/         profile.ts  ← 대부분의 콘텐츠
├── layouts/      BaseLayout.astro (SEO, 테마, 사이드바 2단 레이아웃)
├── lib/          github.ts (빌드할 때 GitHub API 호출, 실패해도 빌드는 계속됨)
├── pages/        index, about, projects/, projects/[id], 404
└── styles/       global.css (디자인 토큰, 카드·배지 컴포넌트, 스택 마키, 다크모드)
docs/             DESIGN_LOG.md (디자인 결정 기록)
```

## 참고한 것

- **레이아웃:** [kroszborg.co](https://www.kroszborg.co)의 왼쪽 사이드바와 Experience 목록, [refact0r.dev](https://refact0r.dev/projects)의 프로젝트 카드
- **분위기:** [attiq.design](https://www.attiq.design), [konpo.studio](https://www.konpo.studio), AI IDE 느낌은 [alejandro-gomez](https://alejandro-gomez.vercel.app/apps/financetelli)
- [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio): 설정 파일 하나로 콘텐츠 관리
- [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio): 경력 타임라인
- [soumyajit4419/Portfolio](https://github.com/soumyajit4419/Portfolio): GitHub 기여 그래프
- [cobiwave/simplefolio](https://github.com/cobiwave/simplefolio): 미니멀한 흐름, 스크롤 등장 효과
- [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio): 시그니처 인터랙션
