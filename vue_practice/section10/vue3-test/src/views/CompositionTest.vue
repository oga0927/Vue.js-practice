<template>
  <div>Composition</div>
  <p>{{ charactor }}</p>
  <p>{{ ThemaPark }}</p>
  <p>reactive: {{ charactorA.name }}</p>
  <p>reactive: {{ charactorA.auther[1] }}</p>
  <p>reactiveToRefs: {{ nameRef }}</p>
  <p>reactiveToRefs: {{ auther[1] }}</p>
  <button @click="clickButton">クリック</button>
  <div><input v-model="search"></div>
</template>

<script>
import { ref, reactive, toRefs, watch } from 'vue'


export default {
  data() {},
  setup() {
    const charactor = 'ミッキー'
    const ThemaPark = 'ディズニーランド'

    const charactorA = reactive({
      name: 'ミニー',
      auther: ['ドナルド', 'シンデレラ']
    })

    const charactorRefs = reactive({
      nameRef: 'デイジー',
      auther: ['チップ', 'デール']
    })

    const clickButton = () => {
      console.log(charactorA.name);
    }

    const search = ref('')

    watch(search, () => {
      console.log(`watch: ${search.value}`);
    })

    return {
      charactor,
      ThemaPark,
      charactorA,
      ...toRefs(charactorRefs),
      clickButton,
      search
    }
  }
}
</script>

<style>

</style>