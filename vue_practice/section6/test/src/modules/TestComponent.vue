<template>
  <div class="red-b">
    <div class="border__blue">
      SCSSのテストです
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

// scssの読み込み
<style scoped lang="scss">
  .red-b {
    color: red;
  }
  .border {
    &__blue {
      border: 1px solid blue;
    }
  }
  
</style>