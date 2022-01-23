<template>
  <div id="item-list-page">
    <div id="item-list-header">
      <h1>Dongurl's Shopping Mall</h1>
    </div>
    <Getitem />
    <footer>
      <div id="footer-block">
        <i class="bi bi-house-door"></i>
        <pre></pre>
        <span id= "footer-icon-font">홈</span>
      </div>
      <div id="footer-block">
        <i class="bi bi-heart"></i>
        <pre></pre>
        <span id= "footer-icon-font">찜</span>
      </div>
      <div id="footer-block">
        <i class="bi bi-cart"></i>
        <pre></pre>
        <span id= "footer-icon-font">장바구니</span>
      </div>
      <div id="footer-block">
        <i class="bi bi-person"></i>
        <pre></pre>
        <span id= "footer-icon-font">마이페이지</span>
      </div>
    </footer>
  </div>
</template>

<script>
import Getitem from '../components/ItemList/Item.vue';

export default {
  name: 'ItemListPage',
  components: {
    Getitem,
  },
};
</script>

<style>

footer {
  position: fixed;
  background-color: lightgray; /*임의색상*/
  text-align: center;
  width: 100%;
  height: 2rem; /* footer의 높이 */
  bottom: 0;
  left: 0;
}
pre {
  margin-top:-23px;
}
#footer-icon-font{
  font-size: 10px;
}
#footer-block{
  display:inline-block;
  margin-right: 35px;
  margin-left: 35px;
}
</style>
