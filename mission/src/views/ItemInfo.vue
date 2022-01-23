<template>
  <div id='item-info-page'>
    <div class="container" data-test="product-name">
      {{ name }}
    </div>
    <!-- v-html이란? html를 랜더링하기위한 것 따로 있음. data에서 html 가져오기 때문이지. -->
    <div class="container">
      <html v-html="description" data-test="product-description">
      </html>
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
      ],
    };
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style scoped>
.main-image, .wear-img {
  width: 374px;
  height: 374px;
}
.profile-box {
  width: 50px;
  height: 50px;
  border-radius: 70%;
  overflow: hidden;
  margin-left: 20px;
}
.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product-name {
  margin-top: -60px;
  margin-left: -160px;
  font-weight: bold;
  font-size: 12px;
}
.product-tag {
  margin-top: -10px;
  margin-left: -160px;
  font-weight: bold;
  font-size: 10px;
}
.star-icon {
  margin-top: -30px;
  margin-right: -340px;
}
.product-info{
  float: left;
  margin-left: 10px
}
.product-sale{
  margin-top: -10px;
  margin-left: -130px;
  color: red;
}
.sale-price{
  margin-top: -38px;
  margin-left: -10px;
}
.origin-price{
  margin-top: -34px;
  margin-right: -120px;
  font-size: 10px;
  text-decoration: line-through;
  color: gray;
}
.product-content{
  margin-left: -100px;
}
</style>
