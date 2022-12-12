<template>
  <img @click="changeName()" alt="Vue logo" src="./assets/logo.png">

  <br>

  {{ name }}

  <br><br>

  <h4>User</h4>
  {{ user.first_name }} {{ user.last_name }}

  <br><br>

  <h4>Admin</h4>
  {{ admin.first_name }} {{ admin.last_name }}

</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'App',
  components: {
  },

  setup() {
    let name = 'Liv';
    
    const user = reactive({
      first_name: 'Livia',
      last_name: 'Pires'
    })

    const admin = ref({
      first_name: 'Admin',
      last_name: 'Master'
    })

    const changeName = () => {
      alert('change name');
      name = 'John';

      user.first_name = 'Flávia';
      admin.value.last_name = 'Master Blaster';
    }
    
    return {
      name,
      user,
      admin,
      changeName,
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
