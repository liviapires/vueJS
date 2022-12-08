import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name: 'Liv',
      last_name: 'Pires',
      email:'liv@pires.com',
    },
    products:[]
  },

  mutations: {
    storeUser(state){
      console.log(state);
    }
  },

  actions: {
  },
  
  getters: {
  },
})
