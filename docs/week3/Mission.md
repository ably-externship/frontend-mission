# 3주차: 쇼핑몰 상품 목록 페이지 구현하기

## 미션 수행 전 필요 작업

2주차와 마찬가지로 3주차 미션도 템플릿 코드를 

### ! 주의사항 !

아래의 지시사항을 수행하기 위해서 2주차 미션의 PR을 마무리하는 것이 필요합니다. 1주차 미션 수행을 위해 **제출하셨던 PR은 머지하셔서 소중한 작업 내역들이 submission 브랜치로 반영**시키고 이후 설명드리는 방법을 수행해주세요.

## 템플릿 코드 반영 방법

가장 먼저 upstream repository([ably-externship/frontend-mission](https://github.com/ably-externship/frontend-mission))와 sync를 맞추는 것이 필요합니다. 본인의 fork repository 웹 페이지로 들어가서 main 브랜치를 확인하면  "Fetch Upstream" 버튼이 나타난 것을 확인할 수 있습니다. Fetch upstream 버튼을 눌러서 main 브랜치를 동기화해주세요.

* [Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork)에서 *Syncing a fork from the web UI* 방법을 사용하시는 것을 권장드립니다.
* 본인의 fork repository 웹 페이지에서 **main 브랜치를 보고 있는 상태**에서 *Fetch and Merge* 해주세요.

main 브랜치에서 템플릿 코드의 커밋 해시는 {{TBA}}입니다. 이 커밋 해쉬를 통해서 submission 브랜치로 템플릿 코드를 업데이트할 것입니다.

```
# 먼저 동기화한 main 브랜치를 로컬로 가져와주세요
git checkout main
git pull origin main
## 이전에 작업한 개발 브랜치(예. develop) 삭제
git branch -d develop # 주의!! 꼭 PR 머지 완료 후 삭제해주세요.
## main 브랜치 싱크 후 submission 브랜치로 이동하고 1주차의 PR 커밋들도 로컬로 가져옵니다.
git checkout submission
git pull origin submission
## submission 브랜치에 cherry-pick을 이용해 2주차 템플릿 코드를 얹습니다
git cherry-pick {{TBA}}
## 이후 나오는 창에서 커밋 메시지 저장 && submission 브랜치 변경사항 푸시
git push origin submission
## 개발 브랜치(예. develop) 등으로 이동해 2주차 미션 수행
git checkout develop
```

## 출제자의 의도

- 페이지 요구사항 내용 중 재사용성이 필요한 요구사항을 도출해내어 별도의 컴포넌트로 구성할 수 있어야 한다.
- 재사용성을 위해 구현한 컴포넌트를 가져와 사용하며, 부모-자식 간 컴포넌트끼리 props와 event handling을 이용해 필요한 데이터를 주고 받을 수 있어야 한다.
- 컴포넌트의 생애주기(Lifecycle)를 이해하고, 각 Lifecycle hook을 이용해 특정 컴포넌트가 생애주기에 따라 필요한 동작을 구현할 수 있다.

## 학습 목표

- 주어진 요구사항을 토대로 쇼핑몰 페이지 개발을 할 때 필요한 기능들을 적절한 크기의 컴포넌트로 나눠 재사용성과 가독성을 높일 수 있어야 합니다.
- 주어진 요구사항들 중 부모-자식 간 컴포넌트 관계가 필요한 지점을 찾아 구성하고, 이들이 데이터를 주고 받는 것을 구현할 수 있어야 합니다.
- 주어진 요구사항들 중 특정 시기에 필요한 동작을 도출해내어 이를 Vue.js의 컴포넌트 lifecycle hook을 이용해 구현할 수 있어야 합니다.

## 미션

미션 상세 정보 페이지의 다음 단계로 상품 목록 페이지를 구현하기로 했습니다. 제일 좋은 것은 상품의 종류별 페이지를 만들어서 다양한 상품들을 확인할 수 있도록 구현하는 것이지만, 초반에는 많은 상품을 준비하지 못하기에 한 페이지에서 모든 상품들을 보여주는 것으로 결정했습니다. 이전 주차와 마찬가지로 아직은 프로토타이핑 단계이므로, 고정된 데이터를 이용해서 페이지를 구현합니다.

### 환경, 사용언어 및 라이브러리 요구사항

- Node.js, Vue [3.x](http://v3.vuejs.org/), [Vue Test Util](https://next.vue-test-utils.vuejs.org/guide/essentials/a-crash-course.html) w/ [Jest](https://jestjs.io/docs/getting-started)

### 기능 구현 요구사항

1. 상품 목록 페이지 최상단에는 쇼핑몰의 이름이 표시되는 영역(이하 Header)이 존재합니다.

2. 상품 목록 페이지 최하단에는 4가지 페이지로 이동할 수 있는 버튼을 담은 영역(이하 Nav)이 존재합니다.
     * 4가지 페이지는 "홈"(상품 목록들), "찜 목록", "장바구니", "마이 페이지"가 있어야 합니다.
     * 이번 미션에서는 링크를 걸거나, 다른 페이지를 구현할 필요는 없습니다.


3. 상품 목록 페이지에 표시되는 상품들은 Header 영역과 Nav 영역 사이에 2열으로 표시되어야 하며, 스크롤이 가능해야 합니다.
3. 상품 목록 페이지에 표시되는 상품 정보에는 상품의 메인 사진, 상품명, 상품 가격이 표시가 되어야 합니다.
   * 상품 상세 정보 페이지에서 구현했듯이, 해당 상품이 현재 할인 중이라면 상품의 할인율과 할인된 가격을 보여줘야합니다.
   * 이번 주차 미션에서는 각 상품의 링크는 걸 필요가 없습니다.
3. 상품 목록 페이지를 스크롤시 Header와 Nav 영역은 스크롤을 따라가지 않으며, 아래와 같이 동작해야 합니다.
   * Nav 영역은 스크롤과 상관없이 화면의 최하단에 고정되어 표시되어야 합니다.
   * Header 영역은 하단으로 스크롤시 숨겨지다가 페이지의 최상단으로 이동하면 다시 표시가 되어야 합니다.

### 참고 사항

이번 주차의 미션은 Vue.js의 핵심인 컴포넌트 구성을 최대한 활용해보는 미션입니다. 하나의 페이지를 적절한 크기의 컴포넌트들로 나누어 구성하여 유지보수성을 높일 수 있습니다. 아래의 공식문서 링크들을 통해 학습하시고 미션을 수행해보세요.

*  [Class and Style Bindings](https://v3.vuejs.org/guide/class-and-style.html#binding-html-classes)
*  [List Rendering](https://v3.vuejs.org/guide/list.html#mapping-an-array-to-elements-with-v-for)
*  [Components Basics](https://v3.vuejs.org/guide/component-basics.html#base-example)
   *  [Props](https://v3.vuejs.org/guide/component-props.html#prop-types), [Non-Prop Attributes](https://v3.vuejs.org/guide/component-attrs.html#attribute-inheritance)
*  [Lifecycle Hooks](https://v3.vuejs.org/guide/instance.html#lifecycle-hooks), [Lifecycle Diagram](https://v3.vuejs.org/guide/instance.html#lifecycle-diagram)
   *  2주차에서 제시된 [Application & Component Instances](https://v3.vuejs.org/guide/instance.html#creating-an-application-instance) 페이지에서 접했을 것이지만, 이번 요구사항에서는 이를 이용해야 하는 부분이 있어 좀 더 자세히 다룰 예정입니다

## 학습 정리

###  Peer Review시 체크 포인트

* 애플리케이션 코드들을 확인했을 때 각 구성 요소(컴포넌트, 메서드, 변수 등)들이 어떤 역할을 하는지 알 수 있나요?
* 구현된 애플리케이션 코드를 참고했을 때, 페이지/컴포넌트를 구성하기 위해 더 좋은 아이디어가 있을까요?
* 컴포넌트들이 적절한 단위로 구성되어 개발이 되었나요? 더 직관적인 컴포넌트를 더 나눌 수 있을까요? (혹은 합칠 수 있을까요?)
* 작성된 테스트케이스들이 모든 기능적 요구사항들을 검증하고 있나요?
* 각 테스트케이스들이 어떤 요구사항을 검증하기 위한 것인지 이해가 되고, 클린코드 가이드에 제시된 것처럼 올바르게 검증을 하고 있나요?
* 작성된 테스트케이스들 외에 더 추가할 수 있는 테스트케이스들이 존재할까요?

### Self Review시 체크 포인트

* 클린코드 가이드에서 설명한대로 명시적인 이름들을 사용하여 자신이 구현한 변수/메서드/컴포넌트의 역할을 바로 드러날 수 있게 했나요?
* 이번 주차까지 배운 Vue.js 문법을 충실히 적용하여 미션의 요구사항들을 구현했나요?

* 컴포넌트들을 적절한 단위로 나누어 구성을 했나요? 어떤 이유로 제출하려는 코드의 상태와 같이 나눠서 구성을 했나요?
* 기능적인 요구사항들을 검증할 수 있는 테스트 코드를 작성했나요?
* 제출 전 필수적으로 추가되는 부분들만 커밋에 포함을 했나요?

## 채점 및 평가 기준

### 평가항목 설명

* 기획력: 주어진 요구사항을 이해하여 자신이 구현해야할 상품 상세 정보 페이지에 대한 기획을 하였는가? 그리고 그 기획에 대한 산출물을 만들었는가? (예. 와이어프레임 수준의 프로토타입 결과)
  * 요구사항 도출 능력을 포함하며, 여기에는 데이터 관련 요구사항, 동적인 시각요소 관련 요구사항, 정적인 시각요소 관련 요구사항을 포함한다.
* 기술력: 현 주차까지 학습한 Vue.js의 문법을 이해하고, 이를 이용해 주어진 요구사항을 구현하였는가?
  * 요구사항의 페이지를 적절한 크기의 컴포넌트로 나누어 구성하였는가?

* 유지보수성: 클린코드 가이드에 따라 안정적인 애플리케이션을 구현하기 위해 노력하였는가?
  * 주어진 기능적 요구사항들을 얼마나 테스트 코드로 구현하였는가?
  * 작성한 코드들이 명시적인 이름을 가지고 있어 그 역할을 명시적으로 알 수 있게 하였는가?
