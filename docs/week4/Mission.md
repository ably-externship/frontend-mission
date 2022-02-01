# 4주차: 페이지 라우팅 및 API 연동

## 템플릿 코드 관련 안내

이번 주차에 필요한 파일들은 이미 기존에 제공된 템플릿 코드에 포함이 되어 있어 별도로 제공되지 않습니다. 각자 3주차까지 개발하신 결과물을 정리하신 후 그 이후에 4주차 미션에 대한 구현 내용을 이어가시면 됩니다.

* 브랜치 전략 및 과제 제출 방법은 이전과 동일하게 개발 브랜치(ex. develop)를 만드신 후 제출 브랜치(ex. submission)로 PR을 보내시면 됩니다. (역시 Airtable 제출 필수!)

## 출제자의 의도

* vue-router의 기본 지식을 습득하여 라우팅 구현을 이해하고, Single Page Application (이하 SPA)에서 서로 다른 화면을 상호작용에 따라 전환할 수 있어야 합니다.
* API 호출을 위해 필요한 HTTP client library들을 이해하여 사용할 수 있어야 합니다.
* API 명세에서 API 호출을 위해 필요한 HTTP 속성들을 이해하고, HTTP client library를 사용해 실행할 수 있어야 합니다.

## 학습 목표

* SPA에서 페이지 단위의 UX를 수립하여 이를 vue-router를 사용해 페이지 라우팅으로 구성할 수 있어야 합니다.
* 주어진 백엔드 서버의 API 명세를 이해하고, 상술한 HTTP Client를 사용하여 각 명세에 해당되는 컴포넌트에 서버의 응답을 적용할 수 있다.

## 미션

그동안 프론트엔드 개발자가 했듯이 백엔드 개발자도 환경설정과 프로토타이핑을 거쳐 Mock API를 사용할 수 있게 되었다고 합니다. Mock API는 현재 Authroization Header를 이용한 인증을 통해 보호가 되어 있는 반면, 실제 CRUD는 일어나지 않아 고정된 데이터만 반환이 되고 있으며, API에 대한 명세는 아래의 주소에서 확인하실 수 있습니다.

* API 관련 정보
  * 기본 주소: https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0
  * 명세 주소: https://projectlion.lkaybob.pe.kr/docs/
  * 인증을 위한 필수 Header: “Authorization: abcd1234”가 요청에 포함되어야 합니다. Header가 없을 경우 Network Erorr를 반환하면서 API 실행이 정상적으로 되지 않습니다.
  * 참고: 제공된 API는 그동안 제가 보여드렸던 프로덕트에 기반해 구성이 됐습니다. 

### 환경, 사용언어 및 라이브러리 요구사항

Node.js, Vue [3.x](http://v3.vuejs.org/), [Vue Test Util](https://next.vue-test-utils.vuejs.org/guide/essentials/a-crash-course.html) w/ [Jest](https://jestjs.io/docs/getting-started), Vue Router, HTTP client library

### 기능 구현 요구사항

1. 3주차에서 개발했던 상품 목록 페이지에서 개별 상품에 대한 링크를 추가해야하며, 개별 링크는 각 상품에 대한 상품 상세 정보 페이지로 전환이 되어야 합니다.
2. 2주차에서 개발했던 상품 상세정보 페이지는 “/item/1”과 같은 주소로 접근이 되어야 합니다.
   * 예시의 “1”은 각 상품에 대한 고유 번호로, 고유 번호가 바뀔 경우 그에 상응하는 상품 정보가 표시되도록 라우팅이 구현되어야 합니다. (힌트: Dynamic Route Matching with Params)
   * 제시된 Mock API는 id를 달리해도 똑같은 상품 정보가 반환되도록 구성이 되어 있습니다.
3. API 연동을 할 때는 일명 Repository pattern을 활용하여 수행해주셔야 합니다.
   * 즉, 컴포넌트 파일 안에서 HTTP client를 직접 호출하지 않아야 합니다.
4. (추가 미션 1) 상기 사항들을 다 구현하셨으면 주어진 API를 활용해 구현되지 않은 다른 페이지들을 개발하고 API 연동을 해보세요.

## 참고자료

### vue-router 관련

vue-router에 관한 기본 정보는 vue-router의 공식문서 중 Essentials 섹션 전체([링크](https://next.router.vuejs.org/guide/))와 Advanced 섹션의 Data Fetching([링크](https://next.router.vuejs.org/guide/advanced/data-fetching.html))을 참고하시면 됩니다.

* Essentials 섹션은 “Getting Started”부터 “Difference History Mode” 부분까지를 의미합니다.
* 공식문서 내용을 참고하시면서 이해하실 수 있겠지만, App.vue를 수정하신 분들은 4주차 미션 수행을 위해서 기존에 포함됐던 `<router-view/>`가 있는지 확인해주셔야 정상적인 미션을 수행하실 수 있습니다.
* Hands-on 실습을 원하시는 분들은 Github의 [vuejs/vue-router의 예시들](https://github.com/vuejs/vue-router/tree/dev/examples)을 직접 실행해보시면서 익히실 수 있습니다.
  * 해당 Repository를 클론하신 후 examples directory에서 node server.js를 실행하시면 실습 환경을 띄우실 수 있습니다.
* Routing에 대한 테스트 코드는 Vue Test Util 공식 문서의 [Testing Vue Router](https://next.vue-test-utils.vuejs.org/guide/advanced/vue-router.html)를 참고하여 작성해보세요.

### HTTP client library 관련

API 호출을 위해는 HTTP client library가 필요합니다. (ex. axios, superagent 등) 만약 개인적으로 선호하시는 library가 있다면 이를 사용하셔도 무방하며, 경험이 없으신 분들은 [axios](https://axios-http.com/kr/)를 사용하시는 것을 추천드립니다.

* 공식문서: [링크](https://axios-http.com/kr/)
* 주어진 API를 정상적으로 사용하기 위해서는 요청 Config([링크](https://axios-http.com/kr/docs/req_config))를 활용하는 것이 필요합니다.

### Repository Pattern 관련

Repository Pattern은 제시된 클린코드 가이드에 맞게 API 연동 부분을 구현할 수 있는 방법입니다. Repository pattern을 사용하면 애플리케이션 안에서 API 호출에 대한 interface를 만들어낼 수 있습니다.

* 참고자료) [Consuming APIs Using the Repository Pattern in Vue.js](https://medium.com/backenders-club/consuming-apis-using-the-repository-pattern-in-vue-js-e64671b27b09)
* Tip) 주어진 API의 명세(JSON response의 key)와 각자 컴포넌트에서 생성한 data property의 key 이름이 다를 것입니다. 이에 대한 대응을 컴포넌트에서 직접하지 않고 repository pattern을 활용해 대응해보세요

## 학습 정리

### Peer Review시 체크 포인트

* 애플리케이션 코드들을 확인했을 때 각 구성 요소(컴포넌트, 메서드, 변수 등)들이 어떤 역할을 하는지 알 수 있나요?
* 구현된 애플리케이션 코드를 참고했을 때, 페이지/컴포넌트를 구성하기 위해 더 좋은 아이디어가 있을까요?
* 작성된 테스트케이스들이 모든 기능적 요구사항들을 검증하고 있나요?
* 각 테스트케이스들이 어떤 요구사항을 검증하기 위한 것인지 이해가 되고, 클린코드 가이드에 제시된 것처럼 올바르게 검증을 하고 있나요?
* 작성된 테스트케이스들 외에 더 추가할 수 있는 테스트케이스들이 존재할까요?

### Self Review시 체크 포인트

* 클린코드 가이드에서 설명한대로 명시적인 이름들을 사용하여 자신이 구현한 변수/메서드/컴포넌트의 역할을 바로 드러날 수 있게 했나요?
* 이번 주차까지 배운 Vue.js 문법을 충실히 적용하여 미션의 요구사항들을 구현했나요?
* 기능적인 요구사항들을 검증할 수 있는 테스트 코드를 작성했나요?
* 제출 전 필수적으로 추가되는 부분들만 커밋에 포함을 했나요? (이전 주차 커밋, 템플릿 코드 등은 제외)

## 채점 및 평가 기준

### 평가항목 설명

* 기획력: 주어진 요구사항을 이해하여 자신이 구현해야할 상품 상세 정보 페이지에 대한 기획을 하였는가? 그리고 그 기획에 대한 산출물을 만들었는가? (예. 와이어프레임 수준의 프로토타입 결과)
  * 요구사항 도출 능력을 포함하며, 여기에는 데이터 관련 요구사항, 동적인 시각요소 관련 요구사항, 정적인 시각요소 관련 요구사항을 포함한다.
* 기술력: 현 주차까지 학습한 Vue.js의 문법을 이해하고, 이를 이용해 주어진 요구사항을 구현하였는가?
  * 정상적으로 라우팅이 동작하고, 제공된 Mock API를 호출하여 페이지가 작동하도록 구성하였는가?

* 유지보수성: 클린코드 가이드에 따라 안정적인 애플리케이션을 구현하기 위해 노력하였는가?
  * 주어진 기능적 요구사항들을 얼마나 테스트 코드로 구현하였는가?
  * 작성한 코드들이 명시적인 이름을 가지고 있어 그 역할을 명시적으로 알 수 있게 하였는가?

 

 

 

