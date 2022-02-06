<template>
  <div class="item-list-item w3-container" @click="$router.push({ name:'Item',
    params: { ItemIds: ItemId }})">
    <div class="w3-panel">
      <img class="w3-round-large" :src="img" />
    </div>
    <div class="w3-container price-container">
      <div
        v-if="isDiscounted"
        class="w3-left discount"
        data-test="discount-rate"
      >
        {{ displayDiscountRate }}
      </div>
      <div class="w3-left price" data-test="price">
        {{ priceWithComma }}
      </div>
    </div>
    <div class="w3-container w3-left info-container">
      <div class="info-name" data-test="name">{{ name }}</div>
      <div data-test="description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemListItem',
  props: {
    ItemId: { type: Number, default: 1 },
    name: { type: String, default: '' },
    price: { type: Number, default: 0 },
    img: {
      type: String,
      default: 'https://cdn-images.farfetch-contents.com/14/16/46/74/14164674_21073031_600.jpg',
    },
    original_price: { type: Number, default: -1 },
    description: { type: String, default: '' },
    discount_rate: { type: Number, default: null },
  },
  computed: {
    priceWithComma() {
      return `${this.price.toLocaleString()}원`;
    },
    isDiscounted() {
      return this.original_price !== -1;
    },
    displayDiscountRate() {
      const rate = ((this.original_price - this.price) / this.original_price) * 100;
      return `${rate.toFixed(0)}%`;
    },
  },
};
</script>

<style scoped>
div.price-container > p {
  display: inline;
  margin-left: auto;
  margin-right: auto;
}

img {
  /* TODO img 사이즈 고정 필요? (온기에서 했던 것대로 하면 될 것 같은데 */
  border: 1px solid black;
  width: 100%;
}

.discount {
  padding-right: 5px;
  color: red;
  font-weight: bold;
}

.price {
  font-weight: bold;
}

.info-container {
  color: gray;
}

.info-container > .info-name {
  font-weight: bold;
}
</style>
