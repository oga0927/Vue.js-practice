<template>
  <div>CompositionTest</div>
  <div>{{ name }}</div>
  <div>{{ items }}</div>
  <div>Ref:{{ nameRef }}</div>
  <div>reactive:{{ book.title }}</div>
  <div>reactive: {{ book.auther[1] }}</div>
  <div>reactivetoRefs: {{ titleRef }}</div>
  <div>reactivetoRefs: {{ autherRef[0] }}</div>
  <button @click="btnClick">クリック</button>
  <p>computed: {{ totalPrice }}</p>
</template>

<script>
import { reactive, ref, toRefs, computed } from 'vue'

export default {
  data(){},
  setup() {
    const name = 'ドトール'
    const items = 'コーヒー'
    const nameRef = ref('カフェ')

    const book = reactive({
      title: 'スタバ',
      auther:['コーヒー','ケーキ']
    })
    const booktoRefs = reactive({
      titleRef: 'タリーズ',
      autherRef:['コーヒー2','ケーキ2']
    })

    const item = reactive({ 
      price: 100,
      number: 1
    })

    const totalPrice = computed(() => {
      return item.price * item.number
    })

    const btnClick = (e) => {
      console.log(book.title);
      console.log(e);
    }

    console.log('setup')
    console.log(this)

    return { 
      name,
      items,
      nameRef,
      book,
      ...toRefs(booktoRefs),
      btnClick,
      item,
      totalPrice
    };
  },
  created() {
    console.log('created');
    console.log(this);
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style>

</style>