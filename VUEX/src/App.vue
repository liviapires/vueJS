<template>
  
  <button @click="updateUser()">
    Atualizar usuário
  </button>
  <br><br>
  <AppProducts />

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
        this.$store.commit('storeUser', newUser);
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
