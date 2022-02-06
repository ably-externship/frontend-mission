<template>
  <ItemListHeader class="item-list-header" />
  <main>
    <div class="w3-row item-list-main" data-test="item-list-page">
      <ItemListItem
        v-for="item in items"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :original_price="item.original_price"
        :key="item.name"
        class="w3-col s6"
        data-test="item"
      ></ItemListItem>
    </div>
  </main>
  <ItemListNav />
</template>

<script>
import ItemListItem from '@/components/ItemList/Item.vue';
import ItemListHeader from '@/components/ItemList/Header.vue';
import ItemListNav from '@/components/ItemList/Nav.vue';

export default {
  components: { ItemListItem, ItemListHeader, ItemListNav },
  name: 'ItemListPage',
  data() {
    return {
      items: [
        {
          ItemId: 1,
          name: 'airmag Sneakers',
          price: 230400,
          original_price: 300000,
          description: "nike's new collaboration",
        },
      ],
    };
  },
};
</script>

<style>
.item-list-main {
  padding-bottom: 60px;
}
</style>
