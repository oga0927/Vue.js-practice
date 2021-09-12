<template>
  <div>
    <button @click="addCount">+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    addCount() {
      // コンポーネントからはcommitでmutationを呼び出す
      this.$store.commit('increment')
    }
  }
}
</script>

