<template>
  <div>
    <button @click="increment">+</button>
    <button @click="addCount">+10</button>
    <button @click="decrement">-</button>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    // increment() {
    //   this.$store.commit('increment')
    // },
    // addCount() {
    //   this.$store.commit('addCount', {
    //     value: 10
    //   })
    // },
    // decrement() {
    //   this.$store.commit('decrement')
    // },
    increment() {
      this.$store.dispatch('incrementAction')
    },
    addCount() {
      this.$store.dispatch('addCountAction',{
        value: 10
      }) 
    },
    decrement() {
      this.$store.dispatch('decrementAction') 
    }
  }
}
</script>

