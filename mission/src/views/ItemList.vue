<template>
  <div id="item-list-page">
    <div id="item-list-header">
      <h1>Donguri_'s Shopping Mall</h1>
    </div>
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
export default {
  name: 'ItemListPage',
};
</script>

<style>

footer {
  position: absolute;
  background-color: lightgray; /*임의색상*/
  left: 0;
  right: 0;
  bottom: 0;
  height: 2rem;
  text-align: center;
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
