<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <DeleteButton></DeleteButton> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import DeleteButton from '@/components/DeleteButton.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    // DeleteButton
  }
}
</script>