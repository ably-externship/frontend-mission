<template>
  <div class="item-list-item">
    <div id="item-container" v-for="(item,index) in items" v-bind:key="item.id">
      <img :key="index +'r'" :src="item.image"/>
      <pre></pre>
      <span id="discount-percent"> {{ discountPercent }}</span>
      <span id="sale-price"> {{ displayPrice }}</span>
      <span v-if="isDiscounted" >{{ displayOriginalPrice }}</span>
      <br>
      <span id="item-name">{{ item.name }}</span>
      <br>
      <span id="item-description" >{{ item.description }}</span>
    </div>
  </div>
</template>
<script>

export default {
  name: 'ItemListItem',
  data() {
    return {
      items: [
        {
          id: 0,
          name: '구찌',
          image: 'http://img.danawa.com/prod_img/500000/963/824/img/4824963_1.jpg?shrink=330:330&_v=20200227122724',
          price: 102020,
          original_price: 203020,
          description: '캐주얼 명품 브랜드',
        },
        {
          id: 1,
          name: 'XD 200',
          image: 'https://ae01.alicdn.com/kf/HTB1YENYbsfrK1Rjy1Xdq6yemFXal/Fashion-Male-Running-Shoes-triple-S-Sneakers-Balancia-Rriumph-Street-DAD-Chunky-Shoes-Dope-Casual-GYM.jpg_640x640.jpg',
          price: 10020,
          original_price: 532020,
          description: '나이키의 새로운 신상화',
        },
        {
          id: 2,
          name: '나이키',
          image: 'https://image.msscdn.net/images/goods_img/20200224/1320009/1320009_1_500.jpg',
          price: 11000,
          original_price: 12000,
          description: '강한 러닝을 할 수 있는 슈즈',
        },
        {
          id: 3,
          name: '아디다스',
          image: 'https://image.msscdn.net/images/goods_img/20190122/937707/937707_1_500.jpg',
          price: 1021020,
          original_price: 2020220,
          description: '엄청난 등산화 ',
        },
        {
          id: 4,
          name: '언더아머',
          image: 'http://img.danawa.com/prod_img/500000/906/675/img/7675906_1.jpg?shrink=330:330&_v=20201006131932',
          price: 1020210,
          original_price: 2022020,
          description: '높이뛰기를 도와주는 ',
        },
        {
          id: 5,
          name: '슈프림',
          image: 'http://img4.tmon.kr/cdn4/deals/2021/12/09/9352182394/9352182394_front_11cc918692.jpg',
          price: 1020320,
          original_price: 4122020,
          description: '캐주얼하고 모든 분위기에 어울리는',
        },
      ],
    };
  },
  computed: {
    displayPrice() {
      return `${this.items[0].price.toLocaleString()}원`;
    },
    displayOriginalPrice() {
      return Object.prototype.hasOwnProperty.call(this.$date, 'original_price')
        ? `${this.items[0].original_price.toLocaleString()}원`
        : undefined;
    },
    isDiscounted() {
      return Object.prototype.hasOwnProperty.call(this.$data, 'original_price');
    },
    discountPercent() {
      return `${Math.round(100 - (((this.items[0].price) * 100) / ((this.items[0].original_price))))}%`;
    },
  },
};
</script>

<style>
img {
  width: 200px;
  height: 200px;
}
pre {
  margin-top:-23px;
}
#item-container {
  display: inline-block;
}
#discount-percent {
  color: red;
  margin-right: 10px;
}
#item-description {
  color: lightgray;
}
</style>
