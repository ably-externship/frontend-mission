# 2주차: 쇼핑몰 상품 상세 정보 페이지 구현하기

## 미션 수행 전 필요 작업

미션 제출 구조상 2주차부터는 제공해드리는 템플릿 커밋을 '땡겨오는' 작업이 필요합니다. 아래의 내용들을 확인해주시고 템플릿 코드를 땡겨와 2주차 미션을 시작해주세요.

### ! 주의사항 !

아래의 지시사항을 수행하기 위해서 1주차 미션의 PR을 마무리하는 것이 필요합니다. 1주차 미션 수행을 위해 **제출하셨던 PR은 머지하셔서 소중한 작업 내역들이 submission 브랜치로 반영**시키고 이후 설명드리는 방법을 수행해주세요.

![](https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/markdown-img/2-0-2.png)

### 템플릿 코드 반영 방법

가장 먼저 upstream repository([ably-externship/frontend-mission](https://github.com/ably-externship/frontend-mission))와 sync를 맞추는 것이 필요합니다. 본인의 fork repository 웹 페이지로 들어가서 main 브랜치를 확인하면 "Fetch Upstream" 버튼이 나타난 것을 확인할 수 있습니다. Fetch upstream 버튼을 눌러서 main 브랜치를 동기화해주세요. (참고: [Syncing a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork))

![](https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/markdown-img/2-0-1.png)

동기화한 main 브랜치에서 마지막 커밋 해쉬를 확인해주세요. 이 커밋 해쉬를 통해서 submission 브랜치로 템플릿 코드를 업데이트할 것입니다.

```bash
# 예를 들어, 이미지에 표시된 commit hash가 aaaaaaa일 경우!
## 이전에 작업한 개발 브랜치(예. develop) 삭제
git branch -d develop # 주의!! 꼭 PR 머지 완료 후 
## main 브랜치 싱크 후 submission 브랜치로 이동
git checkout submission
## submission 브랜치에 cherry-pick을 이용해 2주차 템플릿 코드를 얹습니다
git cherry-pick aaaaaaa
## 이후 나오는 창에서 커밋 메시지 저장 && submission 브랜치 변경사항 푸시
git push origin submission
## 개발 브랜치(예. develop) 등으로 이동해 2주차 미션 수행
git checkout develop
```

## 출제자의 의도

- 요구사항 내용 중에서 데이터와 관련된 요구사항을 도출해내어 이를 Data Properties로 구현할 수 있다.
- 요구사항 중에서 정적인 시각적 요구사항을 도출해내어 HTML, CSS를 사용해 웹 페이지를 구현할 수 있다.
- 요구사항 중에서 필요한 동적인 시각적 요구사항을 도출해내어 Vue.js의 템플릿 문법, 조건부 렌더링 등의 기본 문법들을 사용해 데이터의 결과에 따른 동적인 페이지를 구현할 수 있다.

## 학습 목표

- 주어진 요구사항을 토대로 쇼핑몰에서 판매할 상품의 상세 정보 페이지를 시각적으로 어떻게 구성할지 계획을 수립하고 이를 구현할 수 있어야 합니다.
- 상품 상세 정보 페이지를 구현하면서 선수 지식인 HTML, CSS, JavaScript에 대한 워밍업을 합니다.
- Vue.js의 기본적인 템플릿을 접목하여 단일 컴포넌트로 구성된 페이지를 구성할 수 있습니다.

## 미션

여러분은 쇼핑몰 창업을 하기 위해서 기획자 1명, 프론트 엔지니어 1명(본인), 백엔드 엔지니어 1명과 의기투합을 하여 팀을 만들었습니다. 첫 킥오프 미팅에서 당분간은 쇼핑몰에서 필요한 가장 기본적인 페이지들을 먼저 구현해자고 이야기를 했으며, 구두로 대략적인 요구사항들이 정해졌습니다.

제일 좋은 것은 백엔드 엔지니어가 API를 마련해줬을 때 개발을 시작해야 편하겠지만, 무한정으로 API가 완성되기를 기다리기는 어려워 정해진 값들을 먼저 넣어서라도 프로토타입을 만들려고 합니다. 이런 상황에서 여러분은 쇼핑몰에서 가장 기본인 상품 상세정보 페이지의 프로트타입을 만들려고 합니다.

### 환경, 사용언어 및 라이브러리 요구사항

- Node.js, Vue [3.x](http://v3.vuejs.org/), [Vue Test Util](https://next.vue-test-utils.vuejs.org/guide/essentials/a-crash-course.html) w/ [Jest](https://jestjs.io/docs/getting-started)
- 타 프레임워크(예. Bootstrap)나 기 존재하는 테마를 사용하지 않고 plain한 상태에서 개발하는 것을 권장
  - CSS 스타일링 규칙만을 가지고 있는 프레임워크는 무방 (예. [W3.CSS](https://www.w3schools.com/w3css/default.asp), npm [링크](https://github.com/vitorlans/w3-css))

- 모바일 환경의 웹페이지 기준 (브라우저의 개발자 도구를 이용해 모바일 화면을 확인하며 개발)

### 기능 구현 요구사항

아래의 요구사항은 상술했던 "구두로" 정해진 "대략적인 요구사항들"을 정리한 것입니다.

1. 상품 상세정보 페이지 최상단에는 상품의 이미지가 정사각형 비율로 표시가 되어야 합니다.

2. 상품의 이미지 하단에는 해당 상품의 판매자 정보가 표시되어야 합니다.
   * 판매자 정보는 판매자의 원형 프로필 사진, 판매자 이름(상호명), 그리고 판매자와 관련된 태그가 필요합니다.

3. 상품 판매자 정보 밑에는 상품의 기본 정보인 상품의 이름과 가격이 표시 되어야 합니다.

    * 만약 해당 상품이 현재 할인 중이라면 상품의 할인율과 할인된 가격을 보여줘야 하며, 할인되고 있다는 점을 강조하기 위해 원래 가격은 삭제선을 이용해 표시가 되어야 합니다.

4. 상품 기존 정보 밑에는 상품 설명이 표시되어야 합니다. 상품 설명은 데이터베이스에 HTML 형태로 저장이 되어야 한다고 합의가 되었습니다.

5. 상품의 설명 밑에는 상품에 대한 리뷰들이 표시가 되어야 합니다.
   * 리뷰에는 리뷰를 남긴 구매자의 닉네임, 리뷰 본문이 표시되어야 합니다. 구매자는 리뷰 본문과 함께 사진도 한 장을 올릴 수 있어 리뷰 오른쪽에 1:1 비율로 업로드된 사진이 표시가 되어야 합니다.

6. 상품 상세 정보 페이지가 표시될 때 화면 최하단에는 장바구니 "구매" 버튼이 표시하는 영역이 존재합니다.

   * "구매" 버튼은 해당 상품의 가격이 함께 표시가 되어야 합니다 (예. "19,800원 구매")
   * 해당 영역은 페이지 스크롤이 되어도 최하단에 고정되어 표시가 되어야 합니다.

미선 설명에서 이야기했듯이, 쇼핑몰 구축을 이제 막 시작한 상황을 가정한 것이기 때문에 현재 정한 요구사항들이 완벽하지 않을 수 있습니다. 따라서 프론트 엔지니어로서 추가할만한 요구사항이 있으면 더 구현해도 좋습니다. (단, 미션 레코드에서 본인이 추가 구현한 부분을 설명해주세요.)

### 참고 사항

이번 주차의 미션은 우리가 흔히 볼 수 있는 웹페이지들을 Vue.js답게 구현을 하는 것입니다. 이를 위해선 본격적으로 Vue.js 문법을 학습해야하므로 아래의 공식문서들을 통해 학습하시고 미션을 구현하세요.

*  [Application & Component Instances](https://v3.vuejs.org/guide/instance.html#creating-an-application-instance)
* [Template Syntax](https://v3.vuejs.org/guide/template-syntax.html)
* [Data Properties and Methods](https://v3.vuejs.org/guide/data-methods.html)
* [Computed Properties and Watchers](https://v3.vuejs.org/guide/computed.html#computed-properties)
* [Conditional Rendering](https://v3.vuejs.org/guide/conditional.html)

제시된 프로토타이핑 결과처럼 아이콘을 사용하고 싶으신 분들은 아래의 아이콘 라이브러리들을 참고하세요. (제시드린 아이콘 라이브러리 외에 다른 라이브러리를 사용하셔도 됩니다.)

* [Font Awesome](https://fontawesome.com/)
* [Bootstrap Icons](https://icons.getbootstrap.com/)
* [W3.CSS Icons](https://www.w3schools.com/w3css/w3css_icons.asp)

## 학습 정리

###  Peer Review시 체크 포인트

* 애플리케이션 코드들을 확인했을 때 각 구성 요소(컴포넌트, 메서드, 변수 등)들이 어떤 역할을 하는지 알 수 있나요?
* 구현된 애플리케이션 코드를 참고했을 때, 페이지/컴포넌트를 구성하기 위해 더 좋은 아이디어가 있을까요?
* 작성된 테스트케이스들이 모든 요구사항들을 검증하고 있나요?
* 각 테스트케이스들이 어떤 요구사항을 검증하기 위한 것인지 이해가 되고, 클린코드 가이드에 제시된 것처럼 올바르게 검증을 하고 있나요?
* 작성된 테스트케이스들 외에 더 추가할 수 있는 테스트케이스들이 존재할까요?

### Self Review시 체크 포인트

* 클린코드 가이드에서 설명한대로 명시적인 이름들을 사용하여 자신이 구현한 변수/메서드/컴포넌트의 역할을 바로 드러날 수 있게 했나요?
* Vue.js의 특성을 이용해 주어진 요구사항들을 모두 구현했나요?
  * 더 보기 좋은 페이지를 구성하기 위해 주어진 요구사항 외에 추가할 수 있는 요구사항이 더 있을까요?

* 기능적인 요구사항들을 검증할 수 있는 테스트 코드를 작성했나요?
* 제출 전 필수적으로 추가되는 부분들만 커밋에 포함을 했나요?

## 채점 및 평가 기준

* 기획력: 주어진 요구사항을 이해하여 자신이 구현해야할 상품 상세 정보 페이지에 대한 기획을 하였는가? 그리고 그 기획에 대한 산출물을 만들었는가? (예. 와이어프레임 수준의 프로토타입 결과)
  * 요구사항 도출 능력을 포함하며, 여기에는 데이터 관련 요구사항, 동적인 시각요소 관련 요구사항, 정적인 시각요소 관련 요구사항을 포함한다.

* 기술력: 제시한 Vue.js의 문법을 이해하고, 이를 이용해 주어진 요구사항을 구현하였는가?
* 유지보수성: 본인이 구현한 코드에 테스트 코드를 작성하여 안정적인 애플리케이션을 개발할 수 있도록 하였는가?
  * 주어진 기능적 요구사항들을 얼마나 테스트 코드로 구현하였는가?
