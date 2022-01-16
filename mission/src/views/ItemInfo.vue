<template>
<div id='item-info-page'>
  <img class='main-image' src='../img/nike.jpeg'>
  <div class="product-name>">
    <p class="profile-box" style="background: #BDBDBD;">
        <img class="profile-img" src="../img/profile.png">
    </p>
    <p class="product-name">
      {{ productName }}
    </p>
    <p class="product-tag">
      {{ productTag }}
    </p>
    <p class='star-icon'>
      <img src='../img/star.svg'>
    </p>
    <hr>
  </div>
  <div class="product-info">
    <h2> 나이키 콜라보 제품 </h2>
    <p class='product-sale'>
      {{ productSale }}
    </p>
    <p class='sale-price'>
      {{ salePrice }}
    </p>
    <p class='origin-price'>
      {{ originPrice }}
    </p>
  </div>
  <div class='product-detail' style='margin-top: 100px'>
    <h3 style='margin-left: -300px; font-size: 20px; color: gray'> 상품 정보 </h3>
    <h3 style='margin-left:-250px; font-size: 10px'> {{ productTitle }} </h3>
    <img class="wear-img" src="../img/nike_shoes_wear.jpeg">
    <p class='product-content'>
      {{ productContent }}
    </p>
  </div>
</div>
</template>

<script>

export default {
  name: 'ItemInfoPage',
  data() {
    return {
      productName: 'AirMax 405',
      productTag: '#나이키  #신발',
      productSale: '34%',
      salePrice: '200,000원',
      originPrice: '500,000원',
      productTitle: '남녀 모두 잘 어울리는 스피드 슈즈',
      productContent: '당신의 러닝을 책임질수 있는 슈즈 판매합니다.',
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
