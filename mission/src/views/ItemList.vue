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
          name: 'product 1',
          price: 13400,
          original_price: 15000,
          description: 'description 1',
        },
        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
        },
        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
        },
        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
        },

        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
        },

        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
        },

        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
        },

        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
        },

        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
        },

        {
          name: 'product 2',
          price: 13400,
          description: 'description 1',
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