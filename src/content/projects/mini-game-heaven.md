---
title: Mini Game Heaven
summary: PC 대화면과 스마트폰 컨트롤러를 WebSocket으로 연결하는 실시간 참여형 웹 파티 게임 엔진.
category: Game
cover: ../../assets/projects/mini-game-heaven.jpg
tint: peach
tags: [TypeScript, WebSocket, Web Audio, Sensors, TDD]
status: In Progress
featured: true
order: 1
date: 2026-09-20
highlights:
  - 호스트(PC)와 클라이언트(모바일) 간 초저지연 WebSocket 통신
  - 마이크 데시벨·자이로 센서를 기기에서 직접 계산 (원본 음성은 전송하지 않음)
  - 미니게임을 독립 플러그인으로 추가할 수 있는 계약 우선 구조
  - 테스트 파일 4개, 단위·통합 테스트 15개 100% 통과
---

## 개요

아동 놀이와 교육을 위한 **실시간 참여형 웹 파티 게임 엔진**입니다. 큰 화면(PC)이 호스트가 되고, 참가자들은 각자의 스마트폰을 컨트롤러로 사용합니다. 앱 설치 없이 QR 코드나 방 코드만으로 바로 참여할 수 있습니다.

## 설계 원칙

### 테스트 주도 개발
기능을 구현하기 전에 실패하는 테스트와 타입 계약(`contracts/events.ts`)을 먼저 작성하고, Red → Green → Refactor 주기를 따랐습니다.

### 계약 우선 & 플러그인 구조
모든 통신은 `ProtocolMessage` 규격만 사용합니다. 각 미니게임은 `MiniGameModule` 인터페이스를 구현하는 독립 플러그인이라서, 새 게임을 추가할 때 방 관리나 소켓 코드를 고칠 필요가 없습니다.

### 초저지연 엣지 처리
- **마이크:** 스마트폰의 Web Audio `AnalyserNode`로 RMS 데시벨을 기기에서 직접 계산하고, 임계치를 넘었을 때 트리거 신호만 서버로 보냅니다.
- **자이로 센서:** 30Hz 쓰로틀링과 2° 데드밴드 필터로 불필요한 트래픽을 줄입니다.

## 수록 미니게임
- 스피드 버저 퀴즈
- 동물 소리 데시벨 배틀
- 기우뚱 접시 균형 잡기
## 실제 플레이 화면

### 1. 호스트 대기실 (PC 대화면 / 다크 모드)
![대화면 호스트 로비 및 미니게임 카탈로그](/projects/mini-game-heaven/lobby.png)
4자리 고유 PIN과 QR 코드를 통해 참가자 스마트폰과 즉시 페어링되며, 4대 테마 팩(탐정단, 체육관, 두뇌, 피카소) 및 20종 미니게임을 대화면에서 바로 시작할 수 있습니다.

### 2. 모바일 컨트롤러 & 시상대 순위표
![모바일 4지선다 퀴즈 컨트롤러](/projects/mini-game-heaven/mobile-controller.png)
스마트폰 화면은 즉각적인 반응성을 위해 4지선다형 버튼, 스피드 버저, 자이로 센서 등 선택된 게임에 최적화된 햅틱 컨트롤러 UI로 전환됩니다.

![라운드 종료 후 포디움 순위표](/projects/mini-game-heaven/leaderboard.png)
게임이 종료되면 실시간 점수 합산과 함께 시상대(Podium) 연출이 펼쳐지며 우승자가 발표됩니다.
