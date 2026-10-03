---
title: Gemini Blog Posting Agent
summary: 키워드 하나로 IT 기술 블로그 글을 쓰고 서식을 입혀 구글 블로거에 발행하는 텔레그램 에이전트.
category: Automation
cover: ../../assets/projects/autoposting-gemini.jpg
tint: rose
tags: [Python, Gemini, Blogger API, Telegram Bot]
status: Private
featured: true
order: 4
date: 2026-07-30
highlights:
  - 용어 박스, 목차, 앵커, 팁 박스가 포함된 HTML 서식 자동 생성
  - Search Grounding으로 최신 정보를 반영하고 출처 링크 자동 표시
  - 대화 세션 영속화와 화이트리스트 보안
  - 키워드, 검색 쿼리, 응답 시간을 실시간 로그로 모니터링
---

## 개요

텔레그램으로 키워드를 보내면 **IT/기술 블로그 글을 작성하고 서식을 입혀서 구글 블로거에 바로 발행**하는 에이전트입니다. 최신 Google GenAI SDK(`google-genai`)를 사용하고, Apple Silicon Mac mini에서 상시 구동하고 있습니다.

## 주요 기능

1. **전문 IT 블로그 페르소나:** 레퍼런스 블로그 스타일을 벤치마킹해서 용어 정리 박스, 목차(TOC), H2/H3 앵커, 중요·팁 박스, 표, 코드 블록을 HTML로 렌더링
2. **Google Search Grounding:** 실시간 검색이 필요한 주제는 자동으로 정보를 수집하고, 글 하단에 출처 링크를 표시
3. **세션 영속화:** 비정상 종료 뒤에도 대화 흐름을 복원
4. **화이트리스트 보안:** 지정한 사용자 외 접근 차단
5. **실시간 모니터링 로그**

## 기술 스택

`Python` · `google-genai` · `pyTelegramBotAPI` · `Google Blogger API` · `markdown`
