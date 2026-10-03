# yjgetchar.github.io

Younjae Lee의 개인 포트폴리오 사이트 → **https://yjgetchar.github.io**

Astro + Tailwind CSS로 만들었고, GitHub Actions로 GitHub Pages에 자동 배포합니다.

## 콘텐츠 수정하기

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 이름, 소개, 연락처, 숫자 카드, 경력, 기술 별자리, 섹션 on/off | [`src/data/profile.ts`](src/data/profile.ts) |
| 프로젝트 추가·수정 | [`src/content/projects/*.md`](src/content/projects) |
| 프로필 사진 | `public/images/`에 넣고 `profile.avatar` 경로 변경 |
| 색상·폰트 | [`src/styles/global.css`](src/styles/global.css) 상단 토큰 |

### 프로젝트 추가 예시

`src/content/projects/my-project.md`

```md
---
title: My Project
summary: 한 줄 소개
category: Web        # AI | Game | Automation | Web | Tool
icon: 🚀
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
├── components/   Header, Footer, ConstellationCanvas, ProjectCard, Timeline, GitHubActivity …
├── content/      projects/*.md
├── data/         profile.ts  ← 대부분의 콘텐츠
├── layouts/      BaseLayout.astro (SEO, 테마, 폰트)
├── lib/          github.ts (빌드할 때 GitHub API 호출, 실패해도 빌드는 계속됨)
├── pages/        index, about, projects/, projects/[id], 404
└── styles/       global.css (디자인 토큰, 다크모드)
```

## 벤치마킹

- [euiyun.com](https://euiyun.com): 유리 카드 디자인, 번호 섹션, 인터랙티브 배경
- [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio): 설정 파일 하나로 콘텐츠 관리
- [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio): 경력 타임라인
- [soumyajit4419/Portfolio](https://github.com/soumyajit4419/Portfolio): GitHub 기여 그래프
- [cobiwave/simplefolio](https://github.com/cobiwave/simplefolio): 미니멀한 흐름, 스크롤 등장 효과
- [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio): 시그니처 인터랙션
