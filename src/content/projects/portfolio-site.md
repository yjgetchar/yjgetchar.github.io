---
title: Portfolio Site
summary: 지금 보고 있는 사이트. 밝은 애플 톤의 벤토 그리드와 핀터레스트식 메이슨리로 구성했고, GitHub 데이터를 빌드 시점에 가져옵니다.
category: Web
cover: ../../assets/projects/portfolio-site.jpg
tint: mint
tags: [Astro, Tailwind CSS, Bento Grid, GitHub Actions]
repo: yjgetchar/yjgetchar.github.io
demo: https://yjgetchar.github.io
status: Live
featured: true
order: 4
date: 2026-10-04
highlights:
  - 벤토 그리드 히어로 — 소개·시계·스택·GitHub 활동을 타일로 한 화면에
  - 핀터레스트식 메이슨리 프로젝트 보드와 CSS만으로 만든 카테고리 필터
  - 빌드할 때 GitHub API로 레포 스타와 기여 그래프를 가져옴
  - 프레임워크 런타임 없는 정적 빌드 (Astro) + 다크모드
---

## 개요

개인 포트폴리오 사이트입니다. 콘텐츠는 `src/data/profile.ts`와 Markdown 파일로 관리하고, `main` 브랜치에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.

## 디자인

- **밝은 애플 톤:** `#f5f5f7` 배경에 흰 타일, 큰 라운드와 부드러운 그림자, 애플 블루 포인트 컬러.
- **벤토 그리드:** 첫 화면은 크기가 다른 타일들로 구성됩니다. 소개, 아바타, 지금 만드는 것, 서울 시간, 기술 스택, GitHub 활동, 연락처가 한눈에 보입니다.
- **핀터레스트 메이슨리:** 프로젝트는 높이가 제각각인 카드가 열을 따라 쌓이는 보드 형태입니다. 각 카드에는 파스텔 톤의 3D 커버 이미지가 들어갑니다.

## 기술 포인트

- **메이슨리:** CSS 멀티 컬럼으로 구현하고, `display: grid-lanes`를 지원하는 브라우저에서는 그쪽을 씁니다.
- **필터:** 라디오 버튼과 `:has()` 선택자만으로 동작하는 카테고리 필터. 자바스크립트가 필요 없습니다.
- **스택 위젯:** 벤토 타일 안에서 기술 이름 노드가 서로 이어지고 마우스에 반응합니다. `prefers-reduced-motion`을 따르고, 화면에 안 보일 때는 렌더링을 멈춥니다.
- **다크모드:** `color-scheme`과 `light-dark()`로 시스템 테마를 기본으로 따르고, 토글로 고정할 수 있습니다.
- **이미지:** `astro:assets`로 커버 이미지를 반응형 WebP로 변환합니다.
