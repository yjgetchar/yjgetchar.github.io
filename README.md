# yjgetchar.github.io

Younjae Lee의 개인 포트폴리오 사이트 → **https://yjgetchar.github.io**

밝은 애플 톤의 **벤토 그리드** 첫 화면과 **핀터레스트식 메이슨리** 프로젝트 보드로 구성했습니다.
Astro + Tailwind CSS로 만들었고, GitHub Actions로 GitHub Pages에 자동 배포합니다.

## 콘텐츠 수정하기

| 바꾸고 싶은 것 | 파일 |
|---|---|
| 이름, 인사말, 소개, 연락처, 관심사 타일, 기술 스택, 경력, 섹션 on/off | [`src/data/profile.ts`](src/data/profile.ts) |
| 프로젝트 추가·수정 | [`src/content/projects/*.md`](src/content/projects) |
| 프로젝트 커버 이미지 | [`src/assets/projects/`](src/assets/projects) (빌드할 때 WebP로 자동 변환) |
| 프로필 사진 | `public/images/`에 넣고 `profile.avatar` 경로 변경 |
| 색상·파스텔 톤·폰트 | [`src/styles/global.css`](src/styles/global.css) 상단 토큰 |

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
├── assets/       projects/*.jpg (커버 이미지)
├── components/   Header, Footer, ProjectPin, ConstellationWidget, GitHubActivity, Timeline, SectionTitle …
├── content/      projects/*.md
├── data/         profile.ts  ← 대부분의 콘텐츠
├── layouts/      BaseLayout.astro (SEO, 테마)
├── lib/          github.ts (빌드할 때 GitHub API 호출, 실패해도 빌드는 계속됨)
├── pages/        index, about, projects/, projects/[id], 404
└── styles/       global.css (디자인 토큰, 타일·버튼 컴포넌트, 메이슨리, 다크모드)
```

## 참고한 것

- **디자인:** Apple 제품 페이지의 벤토 그리드, Pinterest의 메이슨리 보드
- [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio): 설정 파일 하나로 콘텐츠 관리
- [codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio): 경력 타임라인
- [soumyajit4419/Portfolio](https://github.com/soumyajit4419/Portfolio): GitHub 기여 그래프
- [cobiwave/simplefolio](https://github.com/cobiwave/simplefolio): 미니멀한 흐름, 스크롤 등장 효과
- [adrianhajdin/project_3D_developer_portfolio](https://github.com/adrianhajdin/project_3D_developer_portfolio): 시그니처 인터랙션
