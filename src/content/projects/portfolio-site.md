---
title: Portfolio Site
summary: 지금 보고 있는 사이트. 왼쪽 고정 사이드바와 프로젝트 그리드, 미리 준비한 답변으로 동작하는 Ask AI 창으로 구성했습니다.
category: Web
cover: ../../assets/projects/portfolio-site.jpg
tint: mint
tags: [Astro, Tailwind CSS, Dark UI, GitHub Actions]
repo: yjgetchar/yjgetchar.github.io
demo: https://yjgetchar.github.io
status: Live
featured: false
order: 5
date: 2026-10-04
highlights:
  - 왼쪽 고정 사이드바(프로필 · About · 섹션 메뉴)와 오른쪽 스크롤 영역으로 나눈 2단 레이아웃
  - 3D 캐릭터 아바타를 누르면 실사 사진으로 뒤집히는 인터랙션
  - 서버 없이 미리 준비한 답변으로 동작하는 Ask AI 창
  - 빌드할 때 GitHub API로 레포 스타와 기여 그래프를 가져오는 정적 빌드 (Astro)
---

## 개요

개인 포트폴리오 사이트입니다. 콘텐츠는 `src/data/profile.ts`와 Markdown 파일로 관리하고, `main` 브랜치에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.

## 디자인

- **다크 우선:** `#09090b` 배경과 zinc 회색, 에메랄드 포인트 컬러. 라이트 모드도 같은 톤으로 맞췄습니다.
- **사이드바 레이아웃:** 데스크톱은 왼쪽에 프로필과 About, 오른쪽에 지금 만드는 중 → Experience → Projects → Contact가 이어집니다. 모바일에서는 사이드바가 맨 위 프로필 카드로 접힙니다.
- **프로젝트 커버:** 어두운 배경에 오브젝트 하나만 두는 제품 사진 스타일로 통일했습니다.

## 기술 포인트

- **스크롤스파이:** 지원하는 브라우저에서는 CSS `:target-current`를 쓰고, 나머지는 IntersectionObserver로 처리합니다.
- **필터:** 라디오 버튼과 `:has()` 선택자만으로 동작하는 카테고리 필터. 자바스크립트가 필요 없습니다.
- **Ask AI:** `<dialog>`와 Invoker Commands로 열고 닫으며, 답변은 빌드할 때 `<template>`으로 미리 만들어 둡니다.
- **다크모드:** `color-scheme`과 `light-dark()`로 시스템 테마를 따르고, 토글로 고정할 수 있습니다.
- **이미지:** `astro:assets`로 커버와 아바타를 반응형 WebP로 변환합니다.
