import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('redners ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
  });

  it('renders information on item', () => {
    const testProductName = 'Testing with vue-test-utils';
    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          name: testProductName,
        };
      },
    });

    expect(wrapper.get('[data-test="name"]').text()).toBe(testProductName);
  });

  it('render original price if product is discounted', () => {
    const testOriginalPrice = 19800;
    const testPrice = 12510;
    const testDistcountRate = ((testOriginalPrice - testPrice) / testOriginalPrice) * 100;

    const wrapper = mount(ItemInfoPage, {
      data() {
        return { original_price: testOriginalPrice, price: testPrice };
      },
    });

    expect(wrapper.find('#original').exists()).toBe(true);
    expect(wrapper.get('#original').text()).toBe(`${testOriginalPrice.toLocaleString()}원`);
    expect(wrapper.get('[data-test="discount-rate"]').text()).toBe(`${testDistcountRate.toFixed(0)}%`);
    expect(wrapper.get('[data-test="price"]').text()).toBe(`${testPrice.toLocaleString()}원`);
  });

  it('renders reviews', () => {
    const testReveiwNo = 3;
    const testReviewWriter = 'test';
    const testReviewTitle = 'test review title';
    const testReviewContent = 'test review content';
    const testReviewCreated = '2020. 12. 30';

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          reviews: [{
            review_no: testReveiwNo,
            writer: testReviewWriter,
            title: testReviewTitle,
            content: testReviewContent,
            created: testReviewCreated,
          }],
        };
      },
    });

    expect(wrapper.find('#reviews').exists()).toBe(true);
    expect(wrapper.find('[data-test="review-writer"]').text()).toBe(testReviewWriter);
    expect(wrapper.find('[data-test="review-title"]').text()).toBe(testReviewTitle);
    expect(wrapper.find('[data-test="review-content"]').text()).toBe(testReviewContent);
    expect(wrapper.find('[data-test="review-created"]').text()).toBe(testReviewCreated);
    expect(wrapper.findAll('[data-test="review-img"]').length).toBe(0);
  });

  it('renders image on review when exists', () => {
    const testReveiwImgUrl = 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/example.jpg';

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          reviews: [{
            review_no: 1,
            writer: 'writer',
            title: 'title',
            content: 'content',
            created: '1990.12.01',
            img: testReveiwImgUrl,
          }],
        };
      },
    });

    expect(wrapper.find('[data-test="review-img"]').exists()).toBe(true);
    expect(wrapper.find('[data-test="review-img"]').find('img').attributes('src')).toBe(testReveiwImgUrl);
  });

  it('renders footer with price', () => {
    const testPrice = 39800;
    const resultString = `${testPrice.toLocaleString()}원 구매`;

    const wrapper = mount(ItemInfoPage, {
      data() {
        return { price: testPrice };
      },
    });

    expect(wrapper.find('[data-test="footer-price"]').text()).toBe(resultString);
  });
});