<template>
  <router-view />
</template>

<script>
import 'w3-css/4/w3pro.css';
import '@fortawesome/fontawesome-free/css/all.css';
import apiIndex from '@/api/index';

export default {
  name: 'App',
  components: {},
  mounted() {
    apiIndex.getArticile(1)
      .then((response) => {
        console.log('getArticle', response);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
