---
title: Mini Game Heaven
summary: 앱 설치 없이 PC 대화면과 스마트폰을 QR·PIN으로 연결해 20종 미니게임을 즐기는 실시간 웹 파티 게임 플랫폼.
category: Game
cover: ../../assets/projects/mini-game-heaven.jpg
tint: peach
tags: [TypeScript, Node.js, WebSocket, Web Audio API, Canvas 2D, Vitest, Playwright, Docker]
status: Private
featured: true
order: 3
date: 2026-09-28
highlights:
  - 4대 테마 팩 · 20종 미니게임을 `MiniGameModule` 계약 기반 플러그인으로 구성
  - Vitest · Playwright 자동화 테스트 300개 이상, 50명 동시 접속 부하 테스트 P95 1.01ms
  - 에셋 파일 없이 Web Audio로 실시간 생성하는 절차적 BGM과 효과음 더킹
  - 비주얼 회귀 · Web Vitals · DevSecOps · Docker 빌드를 GitHub Actions 파이프라인으로 자동화
---

## 개요

아이들과 가족이 함께 즐기는 **실시간 참여형 웹 파티 게임 플랫폼**입니다. 큰 화면(PC·TV)이 호스트가 되고, 참가자들은 각자의 스마트폰을 컨트롤러로 사용합니다. 앱 설치 없이 QR 코드나 4자리 PIN만으로 바로 참여할 수 있습니다.

## 주요 기능

### 4대 테마 팩 · 20종 미니게임
| 테마 팩 | 성격 |
|---|---|
| 눈썰미 탐정단 | 관찰력 · 다른 그림 찾기 계열 |
| 와글와글 체육관 | 마이크 · 자이로 센서를 쓰는 몸 놀이 |
| 번개 두뇌 퀴즈 | 스피드 버저 · 4지선다 · 숫자 입력 (교육용 문항 300개 이상) |
| 꼬마 피카소 | 그리기 · 캔버스 놀이 |

### 파티를 위한 엔진들
- **TeamLeagueEngine / PlaylistManager:** 팀 리그전과 게임 순서 자동 구성
- **ProceduralMusicEngine:** 음원 파일 없이 Web Audio로 BGM을 실시간 생성하고, 효과음이 날 때 자동으로 볼륨을 낮춤(더킹)
- **HapticManager · EmoteParticleSystem:** 스마트폰 진동 피드백과 대화면 이모트 파티클
- **CertificateGenerator:** 게임이 끝나면 우승 상장 생성

## 기술적 포인트

- **계약 우선 플러그인 구조:** 모든 통신은 `ProtocolMessage` 규격만 사용하고, 각 게임은 `MiniGameModule` 인터페이스를 구현한 독립 플러그인입니다. 새 게임을 추가할 때 방 관리나 소켓 코드를 고칠 필요가 없습니다.
- **엣지 처리:** 마이크 데시벨은 스마트폰에서 직접 계산해 트리거 신호만 보내고(원본 음성은 전송하지 않음), 자이로 센서는 30Hz 쓰로틀링과 데드밴드 필터로 트래픽을 줄였습니다.
- **복원력:** 연결이 끊긴 참가자 자동 재접속, 자리를 비운 참가자(AFK) 대체 처리, 8명이 무작위로 끊고 들어오는 chaos-monkey 테스트로 검증했습니다.
- **품질 파이프라인:** 단위·통합·E2E 테스트에 더해 Playwright 비주얼 회귀, Web Vitals 측정, 보안 점검, Docker 이미지 빌드를 GitHub Actions에서 자동으로 돌립니다.

## 실제 플레이 화면

### 1. 호스트 대기실 (PC 대화면 / 다크 모드)
![대화면 호스트 로비 및 미니게임 카탈로그](/projects/mini-game-heaven/lobby.png)
4자리 PIN과 QR 코드로 참가자 스마트폰과 바로 연결되며, 4대 테마 팩 20종 미니게임을 대화면에서 바로 시작할 수 있습니다.

### 2. 모바일 컨트롤러 & 시상대 순위표
![모바일 4지선다 퀴즈 컨트롤러](/projects/mini-game-heaven/mobile-controller.png)
스마트폰 화면은 4지선다 버튼, 스피드 버저, 자이로 센서 등 선택된 게임에 맞는 컨트롤러로 바뀝니다.

![라운드 종료 후 포디움 순위표](/projects/mini-game-heaven/leaderboard.png)
게임이 끝나면 점수를 합산해 시상대(Podium) 연출과 함께 우승자를 발표합니다.
