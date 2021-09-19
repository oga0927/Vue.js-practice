<template>
  <div>
    <p>いいね{{ number / 2 }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number
    }
  },
  // data() {
  //   return {
  //     number: 5
  //   }
  // },
  methods: {
    increment() {
      this.number ++
    }
  }
}
</script>

<style>

</style>