<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <RotateText defaultText="defaultText"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RotateText from '@/components/RotateText.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld, RotateText,
  },
}
</script>
