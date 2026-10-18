---
title: YJ Personal Archive
summary: 컨퍼런스 라이브 스트림을 OCR·STT로 기록해 학습 노트로 정리하고, 비공개 원본과 공개 위키를 분리해 배포하는 지식 아카이브.
category: Web
cover: ../../assets/projects/personal-archive.jpg
tint: butter
tags: [Python, Swift, Vision OCR, Speech STT, Vanilla JS, GitHub Pages]
repo: yjgetchar/personal-archive
demo: https://yjgetchar.github.io/personal-archive/
status: Live
featured: true
order: 5
date: 2026-10-16
highlights:
  - "비공개 원본 저장소와 공개 Pages 저장소를 분리하고, `publish_pages: true`로 표시한 문서만 공개"
  - 문서 42개 · 현장 Q&A 106건 (Toss SLASH 26, if(kakao) 2026, Samsung AI Forum 2026)
  - Finder 스타일 트리 위키, `#/notes/<id>` 딥링크, ⌘K Spotlight 검색, 즐겨찾기 · 이어 읽기
  - Swift 기반 OCR/STT와 HLS 라이브 모니터 데몬으로 수집 자동화, 테스트 14개
---

## 개요

기술 컨퍼런스를 보면서 메모하다 보면 슬라이드와 발표 내용을 둘 다 놓치기 쉽습니다. Personal Archive는 **라이브 스트림의 화면(OCR)과 음성(STT)을 자동으로 기록**하고, 이를 세션별 학습 노트로 정리해 macOS Finder처럼 탐색할 수 있게 만든 개인 지식 아카이브입니다.

## 구조

```
라이브 스트림 (HLS)
   │  모니터 데몬 · yt-dlp
   ▼
Swift Vision OCR (슬라이드)  +  Swift Speech STT (음성)
   │
   ▼
비공개 원본 저장소 ── 노트 정리 · publish_pages 표시
   │  공개 대상만 빌드
   ▼
공개 GitHub Pages 위키
```

- **2-Repo 분리:** 원본 녹취·프레임·초안은 비공개 저장소에만 두고, 정리된 노트 중 공개로 표시한 것만 Pages로 내보냅니다.
- **탐색:** 5단계 계층 컬럼(Columns) 뷰, 트리 위키, 전체 Q&A 뱅크, ⌘K Spotlight 검색을 제공합니다.

## 실제 실행 화면

### Finder 스타일 계층 위키
![Personal Archive Finder 스타일 화면](/projects/personal-archive/finder-wiki.png)
대분류 → 행사 → 트랙 → 문서로 이어지는 컬럼 뷰와 주제 태그, 즐겨찾기·이어 읽기, Dock 바로가기로 구성됩니다.
