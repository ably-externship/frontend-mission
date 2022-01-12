# 1주차: 개발환경 설정 & Warm up

## 출제자의 의도

- 공식문서의 내용을 읽고 직접 실습해보며 Vue.js의 핵심적인 특성들을 이해하고, 이를 응용해 주어진 요구사항을 구현할 수 있어야 합니다.
- 원활한 협업을 위해 간단한 요구사항을 Test-driven Development 기법을 활용해 구현할 수 있어야 합니다.
- Vue.js에 대한 설정뿐만 아니라, Lint, Language Server, 그리고 Scaffolding 도구에 대한 이해와 필요성을 느끼고, 이들을 IDE/Editor의 Extension(Plugin)을 통해 활용할 수 있어야 합니다.

## 학습 목표

- Vue.js 공식문서에서 소개하는 예제들을 확인하여 기본적인 특성과 문법을 이해할 수 있습니다.
- 주어진 요구사항들을 Test-drive Development 방법론을 적용해 개발하는 것을 실습합니다.
- 자신의 개발 생산성을 높이면서 좋은 코드를 작성하는 것을 도와주는 도구들을 직접 찾아 준비할 수 있습니다.

## 미션

본 강의에서 프로젝트를 진행하기 위한 개발 환경 설정을 진행합니다. vue-cli를 이용해 Vue.js 개발을 위한 보일러플레이트 코드를 생성하고, 일부를 수정하여 개발 서버를 통해 결과를 확인하고 깃 저장소에 커밋/푸시를 할 것입니다.

### 간단한 문자열 회전 기능 구현해보기

#### 환경, 사용언어 및 라이브러리 요구사항

- Node.js: [LTS 버전 권장](https://nodejs.org/en/download/), 패키지 매니저 설치 확인 필요(NPM/Yarn)
- Vue 버전: [3.x](http://v3.vuejs.org/)
- 테스트 프레임워크: [Vue Test Util](https://next.vue-test-utils.vuejs.org/guide/essentials/a-crash-course.html) w/ [Jest](https://jestjs.io/docs/getting-started)
- IDE/에디터: [VS Code](https://code.visualstudio.com/download) 권장 (타 IDE/에디터 사용해도 무방)
  - VS Code 사용시 권장 Extension: octref.vetur, dbaeumer.vscode-eslint sysoev.language-stylus, eg2.vscode-npm-script (Yarn 사용시 gamunu.vscode-yarn), orta.vscode-jest


#### 기능 구현 요구사항

1. 제공된 Boilerplate 코드를 개발 서버의 첫 페이지에서 로고와 “Welcome to Your Vue.js App”이라는 문구 밑에 문자열 입력란(이하 input)과 버튼이 있습니다.
2. input은 첫 로딩시 빈 문자열을 가지고 있으며, input에서 입력한 값은 실시간으로 반영되어 바로 밑에 표시가 되어야 합니다.
3. 버튼을 누르면 input에 입력된 문자열과 바로 밑에 표시되는 문자열이 왼쪽으로 1칸씩 회전합니다
   * 예. Projectlion 라는 입력값이 있을 때 버튼 1회 클릭 → rojectlionP 로 변경
4. (심화) 또 다른 버튼을 만들어, 이 버튼을 누르면 input에 입력된 문자열과 이 버튼을 누른 횟수를 보여주는 알림창을 띄워보세요.

##### 예시 화면

![](https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/markdown-img/1-1-1.png)

##### Tip: Vue.js 공식문서의 [Introduction](https://v3.vuejs.org/guide/introduction.html#what-is-vue-js) 부분을 읽어보시고 응용해보세요

이번 미션은 Vue.js의 문법과 특성들을 미리 맛보는 시간입니다. 요구사항을 구현해내기 위해 참고할 수 있는 예제들은 Vue.js 공식문서의 Introduction 부분에서 제시하는 예시들을 참고하시면 충분히 구현하실 수 있습니다.

##### Tip: TDD 방법론을 적용해서 개발하세요

또한 이번 미션은 TDD 방법론에 적응하기 위한 시간입니다. 클린코드 가이드에서 언급했던 것처럼, 본 과정에서는 TDD 방법론에 따라 개발하시는 것을 권장하기 때문에 이번 미션에서는 TDD 방법해의 원칙을 적용했다는 것을 보일 수 있게 커밋들을 구성해서 제출해주세요.

## 학습 정리

### Peer Review시 체크 포인트

- 커밋 메시지만 봐도 커밋 작성자가 무엇을 한 것인지 이해할 수 있나요?
- 작성한 테스트가 어떤 요구사항을 위해 작성된 것인지 이해할 수 있나요?

### Self Review 시 체크 포인트

- 테스트 케이스의 제목이 주어진 요구사항을 충분히 설명하고 있나요?
- 커밋을 하기 전 불필요한 파일들이 들어가지는 않았나요?
- 푸시를 하기 전 커밋 메시지를 다른 사람들이 봤을 때 이해할 수 있도록 작성했나요?

## 채점 및 평가 기준

### 평가항목 설명

* 문제 해결능력: 개발 환경 설정 중 필수 런타임/라이브러리의 설치를 정상적으로 마쳐서 보일러플레이트 코드를 실행할 수 있는가? 만약 문제를 겪었다면 이를 해결하려는 의지가 있는가?
* 깃 저장소 관리 역량: 프로젝트 생성 후 필요한 파일들만 골라 깃 저장소에 커밋/푸시했는가?
* 생산성: 개발환경 설정을 하면서, 자신의 개발 효율을 향상 시키기 위한 설정들을 적용하였는가?
* 유지보수성: 클린코드 가이드의 내용을 읽고 TDD 방법론을 적용하여 개발하였는가?
