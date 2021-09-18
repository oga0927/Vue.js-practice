import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // stateの中身を変更
  mutations: {
    increment(state) {
      state.count ++
    },
    addCount(state, payload) {
      state.count += payload.value
    },
    decrement(state) {
      state.count --
    },
  },
  actions: {
    incrementAction({ commit }) {
      commit('increment')
    },
    addCountAction({ commit },payload) {
      commit('addCount', payload)
    }
  }
  
})
