<template>
  <div id='item-info-page'>
    <div class="container" data-test="product-name">
      {{ name }}
    </div>
    <div class="container" data-test="product-name">
      {{ name }}
    </div>
    <div class="container" data-test="product-name">
      <div data-test="product-price">{{ displayPrice }}</div>
      <div data-test="original-price" v-if="isDiscounted">{{ displayOriginalPrice }}</div>
    </div>
     <!-- v-html이란? html를 랜더링하기위한 것 따로 있음. data에서 html 가져오기 때문이지. -->
    <div class="container">
      <html v-html="description" data-test="product-description">
      </html>
    </div>
    <div class="container">
      <div v-bind= "review in reviews" :keys="review.title">
        <div data-test="review-description">
          {{review.description}}
        </div>
      </div>
    </div>
    <div id="reviews">
      <div
          class="review w3-row"
          v-for="review in reviews"
          :key="review.review_no"
          >
          <div class="review-text">
              <div class="review-row-1">
                  <div class="review-writer" data-test="review-writer">
                      {{ review.writer }}
                  </div>
                  <div class="review-created" data-test="review-created">
                      {{ review.created }}
                  </div>
              </div>
              <div class="review-title" data-test="review-title">
                  {{ review.title }}
              </div>
              <div class="review-content" data-test="review-content">
                  {{ review.content }}
              </div>
          </div>
          <div
              v-if="doesReviewImgExists(review)"
              class="review-img"
              data-test="review-img"
              >
              <img class="w3-right" :src="review.img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemInfoPage',
  data() {
    return {
      product_no: 1,
      name: '신발러닝 업그레이드 나이키',
      image: 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.tmon.co.kr%2Fdeal%2F4636762258&psig=AOvVaw1cQkulhKK9CmZnZmU3igG1&ust=1642997733582000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjwltSBx_UCFQAAAAAdAAAAABAF',
      price: 198000,
      original_price: 300000,
      description: '<div><p><strong>남녀 모두 잘 어울리는 스피드 슈즈<strong><p><img style="width: 100%" src="http://img3.tmon.kr/cdn3/deals/2020/11/09/4636762258/4636762258_intro_je7JgHzEzp.jpg"/><p>연말 송년회에 아주 어울릴 신발 판매 합니다.</p></div>',
      seller: {
        seller_no: 1,
        name: '대한 슈즈',
        hash_tags: ['남성', '신발'],
        profile_image: 'http://image.auction.co.kr/itemimage/1c/63/7c/1c637c5096.jpg',
      },
      reviews: [
        {
          review_no: 1,
          writer: 'ddce',
          title: '굿굿',
          content: '신발이 아주 편해요 만족!',
          like_count: 21,
          created: '2021.12.03',
          img: 'http://img3.tmon.kr/cdn3/deals/2020/11/09/4636762258/4636762258_intro_je7JgHzEzp.jpg',
        },
        {
          review_no: 2,
          writer: 'wkcc',
          title: '좋아요',
          content: '남편이 좋아해요! ',
          like_count: 2,
          created: '2021.01.23',
          img: 'http://img3.tmon.kr/cdn3/deals/2020/11/09/4636762258/4636762258_intro_je7JgHzEzp.jpg',
        },
      ],
    };
  },
  methods: {

  },
  computed: {
    displayPrice() {
      // 1000 단위로 콤마 표시해주는 함수이다. 이런것을 computed에다가 만들어야 한다.
      return `${this.price.toLocaleString()}원`;
    },
    displayOriginalPrice() {
      return Object.prototype.hasOwnProperty.call(this.$date, 'original_price')
        ? `${this.original_price.toLocaleString()}원`
        : undefined;
    },
    isDiscounted() {
      // 데이터가 object이기 때문에 object에 키가 있다고 하는것을 보기위해서 사용한다.
      // but eslint가 걸린다.
      // this.$data.hasOwnProperty('original_price');
      return Object.prototype.hasOwnProperty.call(this.$data, 'original_price');
    },
  },
};
</script>

<style scoped>

</style>
