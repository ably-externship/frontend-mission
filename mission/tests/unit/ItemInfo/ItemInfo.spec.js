import { mount } from '@vue/test-utils';
import ItemInfoPage from '@/views/ItemInfo.vue';

describe('ItemInfoPage', () => {
  it('renders ItemInfoPage', () => {
    const wrapper = mount(ItemInfoPage);

    expect(wrapper.find('#item-info-page').exists()).toBe(true);
    expect(wrapper.find('[data-test="product-image"]').exists()).toBe(true);
  });

  it('renders seller info', () => {
    const testSellerName = 'test seller';
    const testSellerImg = 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/suit-1.png';
    const testSellerTags = ['testing', 'tags'];
    const resultTagText = '#testing #tags';

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          seller: {
            name: testSellerName,
            profile_image: testSellerImg,
            hash_tags: testSellerTags,
          },
        };
      },
    });

    expect(wrapper.find('[data-test="seller-name"]').text()).toBe(testSellerName);
    expect(wrapper.find('img[data-test="seller-image"]').attributes('src')).toBe(testSellerImg);
    expect(wrapper.find('[data-test="seller-hashtags"]').text()).toBe(resultTagText);
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
          name: testProductName,
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
          description: testDescription,
        };
      },
    });
    expect(wrapper.get('[data-test="product-description"]').html()).toContain(testDescription);
  });

  it('renders price on item', () => {
    const testPrice = 100000;
    const displayTestPrice = '10,000원';
    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          price: testPrice,
        };
      },
    });
    expect(wrapper.get('[data-test="product-price"]').text()).toBe(displayTestPrice);
    expect(wrapper.find('[data-test="original-price"]').exists()).toBe(false);
  });

  it('renders discounted price on item', () => {
    const testOriginalPrice = 100000;
    const displayOriginalPrice = '10,000원';
    const testDiscountedPrice = 5000;
    const displayDiscountedPrice = '10,000원';
    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          price: testDiscountedPrice,
          original_price: testOriginalPrice,
        };
      },
    });

    expect(wrapper.get('[data-test="product-price"]').text()).toBe(displayDiscountedPrice);
    expect(wrapper.get('[data-test="original-price"]').text()).toBe(displayOriginalPrice);
  });

  it('renders review', () => {
    const testReview = [
      {
        review_no: 1,
        writer: 'abc**',
        title: 'test title',
        description: 'test description',
        created: '2021.01.13',
      },
    ];

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          reviews: testReview,
        };
      },
    });
    for (let i = 0; i < testReview.length; i += 1) {
      const review = testReview[i];
      expect(wrapper.get('[data-test="review-title"]'.text()).toBe());
      expect(wrapper.get('[data-test="review-description"]').text()).toBe(review.description);
    }
  });

  it('renders image on review when exists', () => {
    const testReveiwImgUrl = 'https://projectlion-vue.s3.ap-northeast-2.amazonaws.com/items/example.jpg';

    const wrapper = mount(ItemInfoPage, {
      data() {
        return {
          reviews: [{
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
