import { mount } from '@vue/test-utils';
import ItemListFooter from '@/components/ItemList/Nav.vue';

describe('ItemListNav', () => {
  test('render ItemListNav', () => {
    const wrapper = mount(ItemListFooter);

    expect(wrapper.find('#item-list-nav').exists()).toBe(true);
  });

  test('contains 4 locations', () => {
    const wrapper = mount(ItemListFooter);
    const testLocationText = ['홈', '찜', '장바구니', '마이 페이지'];

    for (let i = 0; i < testLocationText.length; i += 1) {
      const localWrapper = wrapper.get(`li:nth-child(${i + 1})`);

      expect(localWrapper.text()).toEqual(testLocationText[i]);
    }
  });

  // TODO Router에 대한 테스트 추가 필요
});
