## Psick Univ MBTI
---
MBTI Test 기능 구현 프로젝트입니다.
<br />
https://psmbti.site/

![이미지](/public/img/MBTI.gif "MBTI 프로그램 시현.gif")

### 주요 Spec
---

+ react-redux
+ react-actions
+ react-persist
+ immer

### redux
---

#### Container

+ QuestionContainer
+ ResultContainer
+ SharingContainer

#### Modules

+ answer
  - 질문지 별 답변 내역을 계산 및 최종 점수를 저장하는 모듈 
+ questions
  - 질문지 및 답변지 정보와 선택 내역을 저장하는 모듈
+ result
  - answer에서 계산된 점수를 반영하여 저장된 결과 중 하나를 전달.
+ loading
  - 각 모듈의 action의 상태를 저장하는 모듈


