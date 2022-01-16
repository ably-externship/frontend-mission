<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="resultMsg">
    <button v-on:click="addSubmit">제출</button>
    <button v-on:click="addAlert">알림</button>
    <div id="two-way-binding">
      <p>{{ resultMsg }}</p>
    </div>
  </div>
</template>

<script>
let num = 0;

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      resultMsg: '',
    };
  },
  methods: {
    addSubmit() {
      const n = 1 % this.resultMsg.length;
      const part1 = this.resultMsg.slice(0, n);
      const part2 = this.resultMsg.slice(n);
      this.resultMsg = `${part2}${part1}`;
    },
    addAlert() {
      num += 1;
      alert(`${this.resultMsg} ${num}`);
    },
  },
};

</script>

<!-- Add "scoped"  attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
