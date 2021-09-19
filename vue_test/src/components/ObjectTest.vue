<template>
  <div>
    {{ item.name }}
  </div>
</template>

<script>
export default {
  name: 'ObjectTest',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style>

</style>