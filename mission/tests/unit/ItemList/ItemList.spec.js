import { mount } from '@vue/test-utils';
import ItemListPage from '@/views/ItemList.vue';
import ItemListItem from '@/components/ItemList/Item.vue';

const dataItemList = [
  {
    name: 'product 1', price: 13400, display_price: '13,400원', description: 'description 1',
  },
  {
    name: 'product 2', price: 23500, display_price: '23,500원', description: 'test description 2',
  },
  {
    name: 'product 3', price: 34800, display_price: '34,800원', description: 'testing description 3',
  },
];

describe('ItemListPage', () => {
  test('renders ItemListPage', () => {
    const wrapper = mount(ItemListPage);

    // 컴포넌트의 root tag에 대해서 테스트를 하자
    expect(wrapper.find('[data-test="item-list-page"]').exists()).toBe(true);
  });

  test('renders multiple ItemListItem component', () => {
    const wrapper = mount(ItemListPage, {
      data() {
        return { items: dataItemList };
      },
    });
    const itemWrapper = wrapper.findAllComponents(ItemListItem);

    expect(itemWrapper).toHaveLength(dataItemList.length);

    for (let i = 0; i < dataItemList.length; i += 1) {
      const currentItemWrapper = itemWrapper[i];

      expect(currentItemWrapper.get('[data-test="name"]').text()).toEqual(dataItemList[i].name);
      expect(currentItemWrapper.get('[data-test="price"]').text()).toEqual(dataItemList[i].display_price);
      expect(currentItemWrapper.get('[data-test="description"]').text()).toEqual(dataItemList[i].description);
    }
  });
});