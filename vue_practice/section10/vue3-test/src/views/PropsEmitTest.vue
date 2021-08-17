<template>
  <div>PropsEmitTest</div>
  <div>{{ setupBooks }}</div>
  <div>{{ dataBooks }}</div>
  <ul>
    <li v-for="book in setupBooks" :key="book">
      {{ book.title}}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array
  },
  setup(props) {
    console.log(props.setupBooks);
    console.log(props.dataBooks);
  }
}
</script>

<style>

</style>