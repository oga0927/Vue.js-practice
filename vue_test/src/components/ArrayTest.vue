<template>
  <div>
    {{ hoge }}
    <button @click="childAdd">子のボタン</button>
  </div>
</template>

<script>
export default {
  name: 'ArrayTest',
  props: {
    hoge: {
      type: String
    }
  },
  methods: {
    childAdd() {
      this.$emit('costom-event', 'クリックしたよー')
    }
  }
}
</script>

<style>

</style>