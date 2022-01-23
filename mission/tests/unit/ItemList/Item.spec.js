import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/components/ItemList/Item.vue';

describe('ItemListItem', () => {
  it('redners ItemListItem', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('.item-list-item').exists()).toBe(true);
  });
});
