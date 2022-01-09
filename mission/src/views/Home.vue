<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
    <input v-model="message">
    <button v-on:click="flip">제출</button>
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">알림</button>
    <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      message: '',
      count: 1,
    };
  },
  methods: {
    flip() {
      this.message = this.message.substring(1) + this.message.substring(0, 1);
    },
  },
};
</script>
