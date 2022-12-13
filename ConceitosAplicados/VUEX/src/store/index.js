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
        price: 20,
      },
      {
        id: 2,
        name: 'Bicicleta',
        price: 100,
      },
      {
        id: 3,
        name: 'Carro',
        price: 3000,
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
    total(state){
      return state.cart.reduce((totalAcumulado, item) => totalAcumulado += item.price, 0)
    }
  },

  actions: {
    storeUser({commit}, data){
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('storeUser', data)
          resolve()
          console.log('Dados do usuário armazenados com sucesso!')
        }, 3000)
      })
    }
  },
})