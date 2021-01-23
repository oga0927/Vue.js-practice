import Vue from 'vue'
import App from './App.vue'
import LikeNumber from "./components/LikeNumber.vue";

Vue.config.productionTip = false;
Vue.component('LikeNumber', LikeNumber);
Vue.filter("upperCase", function(value) {
  console.log("フィルタ");
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')