<template>
    <div>
        <input v-model="inputText" type="text" maxlength="20"/>
        <button @click="rotate">text 회전</button>
        <button @click="checkCurrentyTextCount">Check</button>
        <div v-if="this.inputText.length>=20">최대 20자 까지 입력 가능합니다.</div>
        <div> {{inputText}}</div>
    </div>
</template>

<script>
export default {
  props: {
    defaultText: {
      type: String,
    },
  },
  data() {
    return {
      inputText: this.defaultText,
      count: 0,
    }
  },

  methods: {
    rotate() {
      this.inputText = this.inputText.slice(1) + this.inputText.slice(0, 1)
      this.count += 1
    },
    checkCurrentyTextCount() {
      alert(`입력된 문자열:${this.inputText} 지금까지 클릭갯수:${this.count}`)
    },
  },
}
</script>
