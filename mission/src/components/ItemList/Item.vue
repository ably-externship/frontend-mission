<template>
  <div class="item-list-item">
    <div id="item-container">
      <img :src="itemlist[0].image"/>
      <span id="sale price"> {{itemlist[0].price}}</span>
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
          name: '신발러닝 업그레이드 나이키',
          image: 'https://images.footlocker.com/is/image/FLEU/315550797302_01?wid=763&hei=538&fmt=png-alpha',
          price: 102020,
          original_price: 202020,
          description: 'ㅇㅇㅇㅇ',
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
      ]
    };
  },
};
</script>

<style>
img {
  width: 200px;
  height: 200px;
}
</style>
