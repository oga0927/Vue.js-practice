<template>
  <div>
    RuterTest
  </div>
  <button @click="goHome">ホームに戻る</button>
  <button @click="checkRoutePath">ルート情報</button>
</template>

<script>
import { useRouter, useRoute, onBeforeRouteLeave} from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    const goHome = () => {
      router.push('/')
    }

    const checkRoutePath = () => {
      console.log(route.path);
    }
    // toで移動先、fromで移動前
    // vueRouterを使ってコンポーネントを移動するときに
    // 実行したいタイミングがあれば、onBeforeRouteLeaveの中に書いていく
    onBeforeRouteLeave((to, from) => {
      console.log(`to: ${to}`)
      console.log(`from: ${from}`);
    })

    // setup関数では必ずreturnを使用する
    return {
      goHome,
      checkRoutePath
    }
  }
}
</script>

<style>

</style>