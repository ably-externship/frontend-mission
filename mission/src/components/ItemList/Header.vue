<template>
  <header
    class="w3-container"
    :style="{ top: isVisible }"
    id="item-list-header"
  >
    <i class="fas fa-user icon-hidden"></i>
    <h3>My Shopping Mall</h3>
    <div>
      <i class="fas fa-search" id="btn-search" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'ItemListHeader',
  data() {
    return {
      isScrolled: false,
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY !== 0;
    },
  },
  computed: {
    isVisible() {
      return this.isScrolled ? '-50px' : '0px';
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
#item-list-header {
  height: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  flex-direction: row;
  transition: top 0.5s;
}

.icon-hidden {
  margin-right: auto;
  visibility: hidden;
}

#item-list-header div {
  margin-left: auto;
  display: flex;
  align-items: center;
}

#item-list-header div i {
  font-size: large;
}
</style>