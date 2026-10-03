---
title: Portfolio Site
summary: 지금 보고 있는 사이트. Astro와 Tailwind로 만들었고, 기술 스택 별자리 캔버스와 GitHub 연동이 들어 있습니다.
category: Web
icon: 🪐
tags: [Astro, Tailwind CSS, Canvas, GitHub Actions]
repo: yjgetchar/yjgetchar.github.io
demo: https://yjgetchar.github.io
status: Live
featured: true
order: 4
date: 2026-10-04
highlights:
  - 스타가 많은 포트폴리오 5곳과 euiyun.com을 벤치마킹해서 설계
  - 프레임워크 런타임 없는 정적 빌드 (Astro)
  - 빌드할 때 GitHub API로 레포 스타와 기여 그래프를 가져옴
  - 시스템 테마를 따르는 다크모드와 CSS 스크롤 애니메이션
---

## 개요

개인 포트폴리오 사이트입니다. 콘텐츠는 `src/data/profile.ts`와 Markdown 파일로 관리하고, `main` 브랜치에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.

## 벤치마킹

| 출처 | 가져온 요소 |
|---|---|
| euiyun.com | 유리 카드 디자인, 번호 섹션 헤더, 인터랙티브 배경 |
| developerFolio | 설정 파일 하나로 콘텐츠 관리, 섹션 on/off |
| vCard | 경력·학력 타임라인 |
| soumyajit4419/Portfolio | GitHub 기여 그래프 |
| simplefolio | 미니멀한 섹션 흐름, 스크롤 등장 효과 |

## 기술 포인트

- **기술 스택 별자리:** 기술 이름 노드들이 가까워지면 선으로 이어지고, 마우스를 따라 반응합니다. 클릭하면 파동이 퍼집니다. `prefers-reduced-motion` 설정을 따르고, 탭이 숨겨지면 렌더링을 멈춥니다.
- **다크모드:** `color-scheme`과 `light-dark()`로 시스템 테마를 기본으로 따르고, 토글로 고정할 수 있습니다.
- **스크롤 애니메이션:** CSS Scroll-driven Animations로 구현했습니다. 지원하지 않는 브라우저에서는 애니메이션 없이 그대로 보입니다.
