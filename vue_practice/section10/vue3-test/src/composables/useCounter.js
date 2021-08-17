import { computed } from 'vue'

export default function useCounter(item){
  const increment = () => {
    item.amount++
  }
  const decrement = () => {
    item.amount--
  }
  
  const totalPrice = computed(() => {
    return item.amount * item.price
  })
  
  return {
    increment,
    decrement,
    totalPrice
  }
}

