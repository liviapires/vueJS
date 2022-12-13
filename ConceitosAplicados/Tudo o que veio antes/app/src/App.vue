<template>
  <!-- <ExemplosDiretivas v-if="show"/> -->
  <TheHeader>
    <template v-slot:description>
      <h2>Descrição</h2>
    </template>
    
    <h3>Conteúdo</h3>
  </TheHeader>

  <BaseCard />

  <BaseAlert v-if="show" :variant="variant" @close="onClose()">
    {{ text }}
  </BaseAlert>

  <br>
  
  <div v-if="accessLevel === 'admin'">Usuário Admin</div>
  <div v-else-if="accessLevel === 'marketing'">Usuário Marketing</div>
  <div v-else>Usuário</div>
</template>

<script>
// import ExemplosDiretivas from './components/ExemplosDiretivas.vue'
import TheHeader from './components/TheHeader.vue'
import BaseCard from './components/BaseCard.vue'
import BaseAlert from './components/BaseAlert.vue'

export default {
  name: 'App',
  components: {
    // ExemplosDiretivas,
    TheHeader,
    BaseCard,
    BaseAlert,
  },
  data() {
    return {
      show: true,
      accessLevel: 'admin',
      variant: 'success',
      text: 'Seu formulário foi enviado com sucesso!',
    }
  },
  methods: {
    onClose() {
      this.show = false
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
