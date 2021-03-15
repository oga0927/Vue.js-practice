<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="clickInfo">コンソールに移動</button><br><br>
    <button @click="gotoHome">ホームに戻る</button>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    clickInfo() {
      console.log(this.$route);
      console.log(this.$route.path);
      console.log(this.$router);
    },
    gotoHome() {
      // $router.push()でページ遷移
      this.$router.push('/')
    }
  }
}
</script>
