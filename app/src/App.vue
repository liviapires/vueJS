<template>
  <!-- <ExemplosDiretivas v-if="show"/> -->
  <TheHeader>
    
    <template v-slot:description>
      <h2>Descrição</h2>
    </template>
    
    <h3>Conteúdo</h3>
  </TheHeader>

  <br>
  
  <div v-if="accessLevel === 'admin'">Usuário Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
  <div v-else>Usuário</div>
</template>

<script>
// import ExemplosDiretivas from './components/ExemplosDiretivas.vue'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    // ExemplosDiretivas,
    TheHeader,
  },
  data() {
    return {
      show: true,
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
