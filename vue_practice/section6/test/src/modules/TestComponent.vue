<template>
  <div class="red-b">
    <div>
      SCSSのテスト
    </div>
    テストです
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data() {
    return {
      testData: 'テストデータです'
    }
  }
}
</script>

<style scoped>
  .red-b {
    color: red;
  }
</style>