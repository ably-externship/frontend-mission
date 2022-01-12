# 1주차 미션 추가자료

## 배경지식

### 핵심 이론

#### Vue.js

앞서 제시한 Vue.js 공식문서의 [Introduction](https://v3.vuejs.org/guide/introduction.html#what-is-vue-js) 페이지에서 확인할 수 있는 예시들은 Vue.js를 사용하면서 만들어지게 되는 Vue 어플리케이션 인스턴스를 통해 가능한 것들입니다. 어플리케이션 인스턴스가 해주는 일들은 많아 강의를 진행하며 차차 설명하겠지만, 예시에서 확인할 수 있었던 '마법'들을 이해하기 위해 필수적인 개념들을 설명합니다.

##### 선언적 렌더링(Declarative Rendering)

다른 JavaScript 프레임워크들에도 있는 기능이지만, Vue.js에서는 컴포넌트에서 정의한 데이터를 DOM에서 선언적으로(혹은 직관적으로 명시하여) 사용할 수 있습니다.

순수한 JavaScript나 jQuery를 사용하면서 특정 데이터를 DOM에 표시하기 위해서는 DOM Element를 직접 찾아가면서(예. `$('.className').value(newvalue)`) 조작을 해줘야했지만, Vue.js에서는 그렇게 하지 않고 직관적인 형태로 데이터를 변경해주면 알아서 DOM Element를 변경해줍니다. 

##### 양방향 바인딩(Two-way Binding)

앞서 말한 선언적 렌더링은 우리가 만든 Vue 인스턴스가 둘 사이에 양방향 바인딩을 적용해주면서 DOM과 데이터는 반응적인(Reactive) 성격을 가지게 되기 때문입니다. 양방향 바인딩을 적용하기 위해 Vue.js 인스턴스는 DOM Element들이 데이터 의존성을 파악해놓고 데이터의 변경을 추적해 서로 동기화를 해줍니다.

##### 디렉티브(Directive)

선언한 데이터를 DOM Element에서 직접 표시하기 위해서 `{{ }}` 표현식(일명 mustache binding)을 사용하는 것 외에도, DOM element의 속성들에 컴포넌트에서 정의한 데이터들나 속성들을 사용하기 위해 디렉티브를 사용할 수 있습니다. 예를 들어, `<input>` 태그에서 발생하는 값을 컴포넌트의 데이터로 저장하기 위해 `v-model` 디렉티브를, DOM element에서 발생하는 이벤트에 대한 리스너로 컴포넌트의 메서드들을 사용하기 위해 `v-on` 디렉티브를 사용할 수 있습니다.

##### [참고] vue-cli

(Boilerplate 코드를 사용해 미션을 수행한다면 직접적으로 필요한 내용은 아니지만, 향후 Vue.js 개발에 필수적일 것이라 알아두셨으면 합니다.)

`vue-cli`는 Vue.js 프로젝트를 사용하고 관리하는데 필요한 기능들에 통합적으로 접근할 수 있도록 해주는 유틸리티입니다. 제공된 Boilerplate 코드로 개발을 시작할 수도 있지만, `vue-cli`를 사용해 Vue.js 개발에 필요한 Boilerplate 코드를 만들어낼 수 있으며, 개발 서버/테스트 코드 실행, 빌드 파일 생성 등 Vue.js 개발에 필요한 기능들의 실행을 도와줍니다.

뿐만 아니라, Vue.js 개발에 (거의) 필수적으로 필요한 툴과 패키지들에 대한 관리를 도와주기도 합니다. 제공된 Boilerplate 코드를 참고해 `vue-cli`로 이번 강의에서 필요하다고 생각되는 툴과 패키지들을 포함해 프로젝트 폴더를 구성해보세요.

#### Test-driven Development

##### Tutorial

JavaScript/TypeScript로 개발할 때 사용할 수 있는 테스트 프레임워크는 여러가지가 있습니다. 본 강의에서는 Vue.js의 공식 테스트 유틸리티를 사용할 것이며, Jest 프레임워크를 사용할 것입니다. (Jest 이외의 다른 프레임워크를 사용할 수 있도록 설정할 수 있습니다.)

앞서 배포된 클린코드 가이드에서는 원론적인 이야기를 했다면,이번에는 아래 링크의 글을 읽으며 실제 테스트 코드를 보면서 TDD 방법론을 익혔으면 합니다. (해당 글에서는 Jasmine이라는 프레임워크를 사용했지만, 코드 Syntax가 비슷하여 Jest로 실행할 코드를 작성하는데 문제 없습니다.)

- [The Absolute Beginner’s Guide to Test Driven Development, with a Practical Example](https://medium.com/@bethqiang/the-absolute-beginners-guide-to-test-driven-development-with-a-practical-example-c39e73a11631)

##### vue-test-util

문제는 시각적인 결과물을 동반하는 프론트엔드 결과물에 테스트 코드를 어떻게 적용할지일 것입니다. 어쩌면 막막한 느낌이 들 수 있지만, (앞서 클린코드 가이드에서 언급했던 것처럼) Input에 따라 Vue 컴포넌트가 만들어내는 Output을 테스트하면 됩니다.

예를 들어 ‘Todo 리스트’ 컴포넌트를 만든다고 했을 때, 해당 컴포넌트 안에서 발생시킬 수 있는 Input으로는 <input> 태그에 값을 입력하는 것과 클릭 버튼이 있을 것입니다. 이를 테스트할 수 있는 코드는 어떻게 짤 수 있을까요? 정답은 [A Crash Course | Vue Test Utils for Vue 3 (2.0.0-rc.17)](https://next.vue-test-utils.vuejs.org/guide/essentials/a-crash-course.html#adding-a-new-todo) 페이지의 “Adding a new todo” 섹션을 읽어보시면 아실 수 있으며, 이를 활용해 미션의 요구사항에 맞는 테스트 코드를 작성해보세요.

### 프로그래밍 설계

애플리케이션 코드는 미션 설명 문서에서 설명했듯이 Vue.js 공식문서의 [Introduction](https://v3.vuejs.org/guide/introduction.html#what-is-vue-js) 부분에서 소개하는 예시들을 참고하시면 됩니다. 각 예시들에서 활용한 문법/개념들은 앞으로 진행될 강의에서 설명할 예정이니, 이번 미션에서는 감을 잡는 정도로만 이해하시고 적용해보세요.

테스트 코드의 경우, 제공된 Boilerplate 코드 중 `test/example.spec.js`를 확인해보면 아주 간단한 요구사항에 대한 테스트 코드가 작성되어 있음을 확인할 수 있습니다.

```javascript
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});


```

[`describe`](https://jestjs.io/docs/api#describename-fn)는 관련이 있는 테스트 케이스들을 묶어주기 위한 API입니다. 따라서 필요에 따라 새로운 `describe` 문구를 추가해 테스트 케이스들을 추가할 수도 있고, `HelloWord.vue`에 구현을 한다면 기존의 `describe` 문구에 [`it`](https://jestjs.io/docs/api#testname-fn-timeout)을 사용하여 테스트 케이스들을 추가할 수 있습니다.