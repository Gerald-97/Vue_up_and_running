import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    titleArr: []
  },
  getters: {
    all: state => state.titleArr
  },
  mutations: {
    enterTitle(state, title) {
      const myLinks = state.titleArr
      myLinks.push(title)
      state.titleArr  = myLinks
    }
  },
  actions: {
    postLink({ commit }, title) {
      commit('enterTitle', title)
    }
  },
  modules: {
  }
})
