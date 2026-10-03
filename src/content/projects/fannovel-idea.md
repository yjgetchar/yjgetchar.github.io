---
title: Fan Novel Idea Helper
summary: Gemini 세션 유지와 실시간 구글 검색을 갖춘 텔레그램 기반 소설 집필·브레인스토밍 어시스턴트 봇.
category: AI
cover: ../../assets/projects/fannovel-idea.jpg
tint: lavender
tags: [Python, Gemini 2.5 Flash, Search Grounding, Telegram Bot]
repo: yjgetchar/262Q_Fannovel_idea
status: Live
featured: true
order: 3
date: 2026-08-15
highlights:
  - 시놉시스, 캐릭터, 세계관, 플롯 구성에 특화된 창작 페르소나
  - 대화 기록을 파일로 저장해서 재부팅 뒤에도 맥락 유지
  - 원작 설정처럼 사실 확인이 필요한 질문은 Search Grounding으로 검색해서 답변
  - 텔레그램 4,000자 제한을 넘는 긴 답변은 단락 단위로 나눠서 전송
---

## 개요

웹소설·팬픽션을 쓰는 사람을 위한 **브레인스토밍 파트너 봇**입니다. 텔레그램으로 대화하면서 시놉시스를 다듬고, 캐릭터와 세계관을 설계하고, 장르 클리셰(회빙환, 아카데미, 헌터물 등)를 응용한 아이디어를 얻을 수 있습니다.

## 주요 기능

- **창작 특화 페르소나:** 시놉시스, 캐릭터 설정, 세계관, 플롯 구성에 맞춰 튜닝한 시스템 지침
- **대화 세션 유지:** `chat_history_<chat_id>.json`에 대화를 계속 저장해서, 봇을 재시작해도 이어서 작업 가능
- **실시간 검색 연동:** 애니메이션·소설·게임 원작 설정이나 역사 지식처럼 검증이 필요한 주제는 구글 검색 결과를 참고해서 답변
- **보안 화이트리스트:** 지정한 `USER_CHAT_ID` 외의 접근은 차단
- **긴 메시지 분할 전송:** 4,000자가 넘는 답변은 단락 단위로 자동 분할

## 기술 스택

`Python` · `google-genai` · `pyTelegramBotAPI` · `python-dotenv`
