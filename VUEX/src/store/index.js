import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name: 'Liv',
      last_name: 'Pires',
      email:'liv@pires.com',
    },
    products:[
      {
        id: 1,
        name: 'Patins',
        price: 10,
      },
      {
        id: 2,
        name: 'Bicicleta',
        price: 100,
      },
      {
        id: 3,
        name: 'Carro',
        price: 1000,
      },
    ],
    cart: [],
  },

  mutations: {
    storeUser(state, data){
      state.user = data
    },

    addToCart(state, data){
      state.cart.push(data)
    },

    removeFromCart(state, id){
      const index = state.cart.findIndex(obj => obj.id === id)
      state.cart.splice(index, 1)
    }
  },
  
  getters: {
  },

  actions: {
  },
})