<template>
  {{ $store.state.user.first_name }} {{ $store.state.user.last_name }}
  <br>
  {{ $store.state.user.email }}

  <br><br>
  
  <button @click="updateUser()">
    Atualizar usuário
  </button>
  <br><br>
  <AppProducts />
  {{ $store.getters.total }}

</template>

<script>
import AppProducts from './components/Products/AppProducts.vue'

  export default {
    name: 'App',
    components: {
      AppProducts,
    },

    data(){
      return {
        
      }
    },

    methods: {
      updateUser(){
        const newUser = {
          first_name: 'John',
          last_name: 'Lenon',
          email:'a@b.com',
        }
        // this.$store.commit('storeUser', newUser);
        this.$store.dispatch('storeUser', newUser).then(() => {
          console.log('Usuário atualizado com sucesso!')
        });
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
