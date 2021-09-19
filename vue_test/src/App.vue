<template>
  <div>
    <array-test :hoge="addMenu" @costom-event="parentEvent"></array-test>
  </div>
</template>

<script>
import ArrayTest from '@/components/ArrayTest.vue'

export default {
  components: {
    ArrayTest,
  },
  data() {
    return {
      addMenu: 'メニューをクリックしてください'
    }
  },
  methods: {
    parentEvent(e) {
      console.log(e);
    }
  }
  }
</script>

<style>

</style>