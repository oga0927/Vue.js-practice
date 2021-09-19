import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // stateの中身を変更
  mutations: {
    increment( state ) { //mutation変更はstateをつける
      state.count ++
    }
  },
  actions: {
  },
  modules: {
  }
})
