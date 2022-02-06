import { mount } from '@vue/test-utils';
import ItemListHeader from '@/components/ItemList/Header.vue';

describe('ItemListItem', () => {
  test('renders ItemListHeader', () => {
    const wrapper = mount(ItemListHeader);

    expect(wrapper.find('header#item-list-header').exists()).toBe(true);
    expect(wrapper.find('header#item-list-header div').exists()).toBe(true);
    expect(wrapper.find('header#item-list-header i#btn-search').exists()).toBe(true);
  });

  test('hides header when scrolled down', async () => {
    const scrollEvent = { scrollHeight: 300, scrollTop: 200, clientHeight: 100 };
    const wrapper = mount(ItemListHeader);

    await wrapper.trigger('scroll', scrollEvent);

    // 과연 맞는 테스트케이스일까?
    // expect(wrapper.find('header').attributes('style')).toBe('top: -50px');
  });

  // TODO 로그인 페이지에 대한 라우팅을 테스트
});
