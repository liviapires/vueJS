<template>
  <ExemplosDiretivas v-if="showHeader"/>
  
  <br>
  
  <div v-if="accessLevel === 'admin'">Usuário Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
  <div v-else>Usuário</div>
</template>

<script>
import ExemplosDiretivas from './components/ExemplosDiretivas.vue'

export default {
  name: 'App',
  components: {
    ExemplosDiretivas,
  },
  data() {
    return {
      showHeader: true,
      accessLevel: 'admin',
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
