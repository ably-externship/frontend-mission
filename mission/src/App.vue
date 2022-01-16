<template>
  <router-view />
  <footer>
    <div id="rectangle">
      200,000원 구매
    </div>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body {
  margin: 0;
}
footer {
  position: relative;
  background-color: gray; /*임의색상*/
  left: 0;
  right: 0;
  bottom: 0;
  height: 6rem;
  text-align: center;
}
#rectangle {
  width: 150px;
  height: 40px;
  background: black;
  color:white;
  display: inline-block;
  margin-top: 20px
}
</style>
