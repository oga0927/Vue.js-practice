<template>
  <div>ComositionFunctionTest</div>
  <div>
    <p>商品名: {{ item.name }}</p>
    <p>単価: {{ item.price }}</p>
    <p>合計: {{ totalPrice }}</p>
  </div>
  <div>数量</div>
  <button @click="decrement">-</button>
  <button @click="increment">+</button>
</template>

<script>
// import { reactive, computed } from 'vue'
import { reactive } from 'vue'
import useCounter from '@/composables/useCounter'


export default {
  setup() {
    const item = reactive({
      name: '商品名',
      price: '100',
      amount: '0'
    })

    // 分割代入
    const { 
      increment, 
      decrement, 
      totalPrice} = useCounter(item)
    
    // returnで返すことでsetup関数とtemplateの中で使うことができる
    return {
      item,
      increment,
      decrement,
      totalPrice
    }
  }
}
</script>

<style>

</style>