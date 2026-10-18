---
title: DVFS Edge
summary: C++20 엔진과 Python 제어 API로 시세 수집·전략·위험 관리·백테스트를 TDD로 구현한 저지연 퀀트 트레이딩 플랫폼.
category: Automation
cover: ../../assets/projects/dvfs-edge.jpg
tint: lavender
tags: [C++20, CMake/CTest, Python, SQLite, ASan/UBSan, GitHub Actions]
status: Private
featured: true
order: 2
date: 2026-10-16
highlights:
  - C++ 코어 CTest 33/33 통과 (Release + ASan/UBSan), Control API · E2E 16/16 통과
  - OMS 상태머신 · 위험 엔진 · 원장 · 대사(reconciliation)와 46개 장애 주입 시나리오 행렬
  - Coinone · Binance 공개 시세 정규화, 백테스트 CLI, Walk-Forward 검증, 체결 비용 분석(TCA)
  - C++ ↔ Python UDS 브리지, 10,000-step 퍼징, Rust 전환을 대비한 golden-vector 검증
---

> **DVFS = Dynamic Value & Frequency Scaling.** CPU의 DVFS에서 이름만 빌려 온 개인 사이드 프로젝트로, 회사 업무와는 무관합니다. 화면과 본문의 모든 수치는 **시뮬레이션 / Paper 모드 결과**이며 실거래(LIVE)는 잠겨 있습니다.

## 개요

"시세 수집 → 전략 신호 → 위험 검사 → 주문 → 체결 → 원장 기록"까지 트레이딩 시스템의 전체 경로를 **C++20 저지연 코어**와 **Python 제어 API**로 나눠 구현한 프로젝트입니다. 실제 돈을 쓰기 전에 시스템이 망가지는 방식을 먼저 검증하는 것을 목표로, 모든 모듈을 테스트부터 작성(TDD)했습니다.

## 구조

```
공개 시세 (Coinone · Binance, 무인증)
        │  정규화
        ▼
C++20 Core ── Strategy(H1/H4) ── Risk Engine ── OMS 상태머신 ── Ledger / Reconciliation
        │  UDS 브리지
        ▼
Python Control API ── 백테스트 CLI · Walk-Forward · TCA
        │
        ▼
DVFS Terminal (대시보드)  ·  SQLite 지식 베이스
```

## 기술적 포인트

- **안전 우선:** 기본 모드는 PAPER이며 LIVE는 잠금 상태입니다. 신규 진입 즉시 중지(`PAUSE_ENTRIES`) 같은 긴급 스위치를 대시보드에서 바로 누를 수 있습니다.
- **장애 주입:** 네트워크 끊김, 중복 체결, 시세 지연 등 46개 시나리오를 행렬로 정의해 OMS·위험 엔진이 올바르게 반응하는지 검증합니다.
- **메모리 안전성:** Release 빌드와 AddressSanitizer / UndefinedBehaviorSanitizer 빌드를 모두 CI에서 돌립니다.
- **언어 전환 대비:** 핵심 계산을 golden-vector로 고정해, 이후 Rust로 옮겨도 같은 결과가 나오는지 확인할 수 있습니다.

## 실제 실행 화면

### DVFS Terminal — 종합 현황 (Paper 모드)
![DVFS Terminal 종합 현황 대시보드](/projects/dvfs-edge/terminal.png)
포트폴리오 자산·순손익·체결 성과·Microprice 지표 카드와, 캔들 + Microprice + H1/H4 신호 + 누적 자산을 겹쳐 보는 멀티 레이어 차트, 백테스트·시세 캡처·긴급 정지 제어 패널로 구성됩니다. (표시된 금액은 모두 시뮬레이션 값입니다.)
