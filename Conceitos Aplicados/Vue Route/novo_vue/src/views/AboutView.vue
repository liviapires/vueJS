<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <br>
  <button @click="voltar()">
    Voltar
  </button>
</template>

<script>
  export default {
    name: 'AboutView',
    methods:{
      voltar(){
        this.$router.push('/user/1')
      }
    }
  }
</script>