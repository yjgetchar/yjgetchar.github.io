---
title: AI Star Chaser
summary: 기능별 AI 에이전트가 뉴스·GitHub·신규 모델 소식을 직접 모아 한 페이지로 정리하는 멀티 에이전트 AI 다이제스트 대시보드.
category: AI
cover: ../../assets/projects/star-chaser.jpg
tint: blue
tags: [Python, Multi-Agent, OpenAI Responses API, FastAPI, HTMX, SQLite]
status: Private
featured: true
order: 2
date: 2026-10-04
highlights:
  - Orchestrator가 자연어 요청을 읽고 News · GitHub · Model · 키워드 · 브리핑 에이전트에 작업을 나눠 줌
  - 대상이 모호하면 ask_user로 되묻고, 선택지 버튼으로 답을 받는 needs_input 흐름
  - 모든 Tool 호출(RSS, GitHub API, 웹 검색, 페이지·PDF 수집)을 SQLite에 단계별로 기록해 근거를 확인할 수 있음
  - 30일 키워드 히트맵과 급상승 감지, 오늘의 3줄 브리핑, 실행 과정 실시간 시각화
  - 네트워크 없이 도는 단위 테스트 60개 이상
---

## 개요

최근 N일 동안의 AI 소식을 한 화면에 모아 주는 **멀티 에이전트 대시보드**입니다. 사용자가 "최근 3일 LLM 관련 GitHub 저장소만"처럼 자연어로 요청하면, Orchestrator가 필요한 에이전트를 골라 실행하고 결과를 섹션별로 보여 줍니다.

## 구조

```
사용자 요청 (자연어 / 갱신 버튼)
        │
        ▼
Orchestrator ── run_news_agent · run_github_agent · run_model_agent · ask_user
        │
        ▼
News Agent        GitHub Agent           Model Agent
(RSS, 웹 검색)    (GitHub Search API)    (웹 검색, 페이지·PDF 수집)
        │
        ▼
SQLite  runs / steps / results
```

- **에이전트 루프:** OpenAI Responses API 공통 루프 하나로 모든 에이전트를 돌리고, 출력 항목을 전부 step으로 기록합니다.
- **화면:** FastAPI + Jinja2 + HTMX. 벤토 첫 화면, 키워드 히트맵, 뉴스 메이슨리, GitHub 급상승 표, 신규 모델 요약, 에이전트 구조도와 실행 로그로 구성했습니다.

## 화면 구성

| 섹션 | 내용 |
|---|---|
| 오늘의 3줄 브리핑 | 캐시된 결과만 입력으로 써서 출처 링크가 달린 3줄 요약 |
| 키워드 히트맵 | 30일 × 상위 15개 키워드, 급상승 배지와 추세선 |
| AI 뉴스 핫이슈 | GeekNews RSS와 웹 검색 기사, 토픽 필터 |
| GitHub 급상승 | 최근 N일 안에 만들어진 저장소 중 스타 상위 |
| 신규 모델 | OpenAI · Anthropic · Google 신규 모델 스펙과 출처 |
| Multi-Agent 상태 | Orchestrator → Agent → Tool 구조도, 실행 상태, Tool 호출 로그 |

## 실제 실행 화면

### 1. 멀티 에이전트 다이제스트 메인 대시보드
![AI Star Chaser 메인 대시보드](/projects/star-chaser/dashboard-main.png)
자연어 요청 바, 근거 링크가 달린 오늘의 3줄 브리핑, 벤토 그리드(Gemini 4 Argon 핫이슈, 핫토픽 TOP10, 신규 모델 요약, GitHub 급상승)와 30일 키워드 히트맵이 한눈에 제공됩니다.

### 2. Human-in-the-Loop 상호작용 (`needs_input`)
![Orchestrator 질문 및 선택지 버튼](/projects/star-chaser/needs-input.png)
"정리해 줘"처럼 요청 범위가 모호할 경우, `ask_user` 도구를 통해 필요한 범위를 객관식 버튼으로 명확히 되묻는 인터랙션 흐름입니다.

### 3. 멀티 에이전트 구조도 및 실행 로그
![Multi-Agent 상태 및 Step 로그](/projects/star-chaser/agent-architecture.png)
Orchestrator에서 각 전문 Agent(News, GitHub, Model)로 이어지는 흐름과, 모든 Tool 호출의 인자·결과가 SQLite에 Step 단위로 투명하게 기록됩니다.
