import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import LikeNumber from './components/LikeHeader.vue';

Vue.config.productionTip = false
// Vue.component("LikeNumber", LikeNumber);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
