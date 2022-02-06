import { mount } from '@vue/test-utils';
import ItemListItem from '@/components/ItemList/Item.vue';

const props = {
  name: 'product 1', price: 13400, description: 'description 1',
};
const testDisplayPrice = '13,400원';

describe('ItemListItem', () => {
  it('redners ItemListItem', () => {
    const wrapper = mount(ItemListItem);

    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });

  it('renders item information', () => {
    const wrapper = mount(ItemListItem, {
      props,
    });

    expect(wrapper.find('[data-test="price"]').text()).toBe(testDisplayPrice);
    expect(wrapper.find('[data-test="name"]').text()).toBe(props.name);
    expect(wrapper.find('[data-test="description"]').text()).toBe(props.description);
  });

  it('renders discount rate when current price is lower than original price', () => {
    const originalPrice = 15000;
    const testDiscountRate = '11%';
    const mergedProps = { original_price: originalPrice, ...props };
    const wrapper = mount(ItemListItem, {
      props: {
        ...mergedProps,
      },
    });

    expect(wrapper.find('[data-test="discount-rate"]').text()).toBe(testDiscountRate);
  });
});