<template>
  <div class="item-list-item">
    <div id="item-container">
      <img :src="items[0].image"/>
      <pre></pre>
      <span id="discount-percent"> {{ discountPercent }}</span>
      <span id="sale-price"> {{ displayPrice }}</span>
      <span v-if="isDiscounted">{{ displayOriginalPrice }}</span>
      <br>
      <span id="item-name">{{ items[0].name }}</span>
      <br>
      <span id="item-description">{{ items[0].description }}</span>
    </div>
    <div id="item-container">
      <img :src="items[0].image"/>
      <pre></pre>
      <span id="discount-percent"> {{ discountPercent }}</span>
      <span id="sale-price"> {{ displayPrice }}</span>
      <span v-if="isDiscounted">{{ displayOriginalPrice }}</span>
      <br>
      <span id="item-name">{{ items[0].name }}</span>
      <br>
      <span id="item-description">{{ items[0].description }}</span>
    </div>
    <div id="item-container">
      <img :src="items[0].image"/>
      <pre></pre>
      <span id="discount-percent"> {{ discountPercent }}</span>
      <span id="sale-price"> {{ displayPrice }}</span>
      <span v-if="isDiscounted">{{ displayOriginalPrice }}</span>
      <br>
      <span id="item-name">{{ items[0].name }}</span>
      <br>
      <span id="item-description">{{ items[0].description }}</span>
    </div>
    <div id="item-container">
      <img :src="items[0].image"/>
      <pre></pre>
      <span id="discount-percent"> {{ discountPercent }}</span>
      <span id="sale-price"> {{ displayPrice }}</span>
      <span v-if="isDiscounted">{{ displayOriginalPrice }}</span>
      <br>
      <span id="item-name">{{ items[0].name }}</span>
      <br>
      <span id="item-description">{{ items[0].description }}</span>
    </div>
    <div id="item-container">
      <img :src="items[0].image"/>
      <pre></pre>
      <span id="discount-percent"> {{ discountPercent }}</span>
      <span id="sale-price"> {{ displayPrice }}</span>
      <span v-if="isDiscounted">{{ displayOriginalPrice }}</span>
      <br>
      <span id="item-name">{{ items[0].name }}</span>
      <br>
      <span id="item-description">{{ items[0].description }}</span>
    </div>
    <div id="item-container">
      <img :src="items[0].image"/>
      <pre></pre>
      <span id="discount-percent"> {{ discountPercent }}</span>
      <span id="sale-price"> {{ displayPrice }}</span>
      <span v-if="isDiscounted">{{ displayOriginalPrice }}</span>
      <br>
      <span id="item-name">{{ items[0].name }}</span>
      <br>
      <span id="item-description">{{ items[0].description }}</span>
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
          name: '나이키',
          image: 'https://images.footlocker.com/is/image/FLEU/315550797302_01?wid=763&hei=538&fmt=png-alpha',
          price: 11000,
          original_price: 12000,
          description: '강한 러닝을 할 수 있는 슈즈',
        },
        {
          id: 1,
          name: '신발러닝 업그레이드 나이키',
          image: 'https://images.footlocker.com/is/image/FLEU/315550797302_01?wid=763&hei=538&fmt=png-alpha',
          price: 102020,
          original_price: 202020,
          description: 'ㅇㅇㅇㅇ',
        },
        {
          id: 2,
          name: '신발러닝 업그레이드 나이키',
          image: 'https://images.footlocker.com/is/image/FLEU/315550797302_01?wid=763&hei=538&fmt=png-alpha',
          price: 102020,
          original_price: 202020,
          description: 'ㅇㅇㅇㅇ',
        },
        {
          id: 3,
          name: '신발러닝 업그레이드 나이키',
          image: 'https://images.footlocker.com/is/image/FLEU/315550797302_01?wid=763&hei=538&fmt=png-alpha',
          price: 102020,
          original_price: 202020,
          description: 'ㅇㅇㅇㅇ',
        },
        {
          id: 4,
          name: '신발러닝 업그레이드 나이키',
          image: 'https://images.footlocker.com/is/image/FLEU/315550797302_01?wid=763&hei=538&fmt=png-alpha',
          price: 102020,
          original_price: 202020,
          description: 'ㅇㅇㅇㅇ',
        },
        {
          id: 5,
          name: '신발러닝 업그레이드 나이키',
          image: 'https://images.footlocker.com/is/image/FLEU/315550797302_01?wid=763&hei=538&fmt=png-alpha',
          price: 102020,
          original_price: 202020,
          description: 'ㅇㅇㅇㅇ',
        },
        {
          id: 6,
          name: '신발러닝 업그레이드 나이키',
          image: 'https://images.footlocker.com/is/image/FLEU/315550797302_01?wid=763&hei=538&fmt=png-alpha',
          price: 102020,
          original_price: 202020,
          description: 'ㅇㅇㅇㅇ',
        },
      ],
    };
  },
  computed: {
    displayPrice() {
      // 1000 단위로 콤마 표시해주는 함수이다. 이런것을 computed에다가 만들어야 한다.
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
