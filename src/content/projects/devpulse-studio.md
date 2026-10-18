---
title: DevPulse Studio
summary: 여러 워크스페이스의 Git 프로젝트 상태·AI 사용 한도·할 일을 한곳에서 관리하는 로컬 개발 관제 대시보드.
category: Tool
cover: ../../assets/projects/devpulse-studio.jpg
tint: mint
tags: [Node.js 22, node:sqlite, SQLite, Vanilla JS, node:test, Git CLI]
status: In Progress
featured: true
order: 1
date: 2026-10-17
highlights:
  - 여러 워크스페이스의 Git 저장소를 실시간 스캔하고, 변경 사항 확인부터 커밋·푸시까지 원클릭으로 처리
  - 보호 파일 감시, Git HEAD 기준 복구, 4단계 검증 루프로 AI 에이전트의 실수를 되돌릴 수 있게 설계
  - Codex · Antigravity · Claude Code 사이를 오갈 때 세션을 보존하고 HANDOFF 문서를 만들어 주는 컨텍스트 브리지
  - Work Studio — 집중 작업 3개, 의존성 그래프, 주간 목표로 개인 작업 흐름 관리
  - npm 의존성 0개 (Node.js 22 내장 `node:sqlite` · `node:test`만 사용), 테스트 15개
---

## 개요

AI 코딩 에이전트 여러 개와 프로젝트 여러 개를 동시에 굴리다 보면, **"지금 어느 저장소에 커밋 안 한 변경이 있지?", "이 작업 어디까지 했더라?"** 를 매번 터미널로 확인하게 됩니다. DevPulse Studio는 이 확인 작업을 한 화면으로 모은 **로컬 전용 개발 관제 대시보드**입니다.

## 주요 기능

| 영역 | 내용 |
|---|---|
| 프로젝트 레이더 | 등록한 워크스페이스 아래 Git 저장소를 스캔해 브랜치·변경 파일·원격 동기화 상태를 카드로 표시 |
| 원클릭 Git | 변경 확인 → 커밋 메시지 작성 → 푸시까지 대시보드에서 처리 |
| 안전장치 | 보호 파일 감시, HEAD 기준 복구, 작업 후 4단계 검증 루프 |
| 컨텍스트 브리지 | 에이전트 간 전환 시 진행 상황을 HANDOFF 문서로 정리해 다음 세션에 이어 붙임 |
| Work Studio | 오늘 집중할 작업 3개, 작업 간 의존성 그래프, 주간 목표 |
| AI 이벤트 레이더 | 관심 있는 AI 행사·발표 일정을 모아 보기 |

## 기술적 포인트

- **제로 의존성:** 프레임워크 없이 Node.js 22 내장 모듈(`node:sqlite`, `node:test`, `child_process`)과 Vanilla JS만으로 구성해, 설치 없이 `node`만 있으면 실행됩니다.
- **로컬 우선:** 모든 데이터는 로컬 SQLite에만 저장하고 외부로 보내지 않습니다.
- **테마:** 11가지 화면 테마를 지원합니다.

> 개인 작업 환경 전용 도구라 저장소는 비공개이며, 화면에 로컬 경로가 노출되어 실제 캡처 대신 커버 이미지로 대신합니다.
