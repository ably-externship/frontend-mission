import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('redners ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });
  it('renders product name on item', () => {
    const testProductName = 'test product name';
    const wrapper = mount(ItemInfoPage, {
    // await -> setData는 컴포넌트에서 정의하는 데이터 부분에서 이 데이터를 업데이트 해줌
    // setData를 하는 메소드가 기존에 정의되어 있는 데이터 프로퍼트와 merge한다.
    // await wrapper.setData({name: 'test product name'})

      // merge 가 되는 상황에서 마운트 된다.
      data() {
        return {
          name: testProductName
        };
      },
    });

    expect(wrapper.get('[data-test="product-name"]').text()).toBe(testProductName);
  });
  it('renders product description on item', () => {
    const testDescription = '<p>test product description</p>';
    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          description: testDescription
        };
      },
    });
    expect(wrapper.get('[data-test="product-description"]').html()).toContain(testDescription);
  });
});
