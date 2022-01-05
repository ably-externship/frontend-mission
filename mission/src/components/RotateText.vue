<template>
    <div>
        <input v-model="inputText" type="text"/>
        <button @click="rotate">text 회전</button>
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
    }
  },

  methods: {
    rotate() {
      this.inputText = this.inputText.slice(1) + this.inputText.slice(0, 1)
    },
  },
}
</script>
