<template>
  <div>PropsEmitTest</div>
  <div>{{ setupBooks }}</div>
  <div>{{ dataBooks }}</div>
  <ul>
    <li v-for="book in setupBooks" :key="book">
      {{ book.title}}
    </li>
  </ul>
  <button @click="emitTest">emitテスト</button>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array
  },
  setup(props, context) {
    console.log(props.setupBooks);
    console.log(props.dataBooks);

    const emitTest = () => {
      context.emit('custom-event', '子の値')
      
    }

    return {
      emitTest
    }
  }
}
</script>

<style>

</style>