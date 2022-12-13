<template>
  <AppHook v-if="showAppHook"/>

  <br><br>

  <button @click="showAppHook = !showAppHook">
    Toggle AppHook
  </button>
  
  <br><br>

  <img @click="changeName()" alt="Vue logo" src="./assets/logo.png">

  <br><br>

  <h4>User</h4>
  {{ user.first_name }} {{ user.last_name }}

  <br><br>

  <h4>Computed</h4>
  {{ fullName }}

  <br><br>

  <AppButton data-vue="Jon" @update="getUpdate">
    Save
    <template #icon>
      Icon
    </template>
  </AppButton>

</template>

<script>
import { ref, computed, watch} from 'vue';
import AppHook from './components/AppHook.vue';
import AppButton from './components/AppButton.vue';

export default {
  name: 'App',
  components: {
    AppHook,
    AppButton,
  },

  setup() {
    const getUpdate = (data) => {
      console.log('update', data)
    }

    const showAppHook = ref(true);

    const user = ref({
      first_name: 'Livia',
      last_name: 'Pires'
    })

    const fullName = computed(() => {
      return `${user.value.first_name} ${user.value.last_name}`;
    })

    watch(user,() =>{
      console.log('user changed')
    }, {
      deep: true
    })

    const changeName = () => {
      alert('change name')

      user.value.first_name = 'Flávia';
    }
    
    return {
      user,
      fullName,
      changeName,
      showAppHook,
      getUpdate,
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
