<template>
  <div>
    <h4 :class="$style.title">SmallComponent!</h4>
    <h4 :class="$style.color">leageComponent</h4>
    <button :class="$style.button" @click="e => $emit('click', e)">
    <slot></slot>
  </button>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'SmallComponent',
  created() {
    console.log(this.$style);
  },
});
</script>

<style module>
.title {
    border: dashed 2px #5b8bd0;
    border-radius: 5px;
    padding: 3px;
}
.color {
  font-size: 20px;
  color: red;
}
.button {
    background: blue;
    padding: 5px 10px;
}
</style>