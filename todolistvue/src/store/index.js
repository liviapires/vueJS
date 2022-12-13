import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[],
  },
  getters: {
  },
  mutations: {
    storeTodos(state, data){
      state.todos = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
