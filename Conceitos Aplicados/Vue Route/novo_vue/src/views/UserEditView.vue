<template>
    <div>
        Usuário - nº {{ $route.params.id }}
    </div>
    <br>
    <button @click="login()">
        Clique Aqui
    </button>
</template>

<script>
    export default {
        name: 'UserEditView',
        methods:{
            login(){
                this.$router.push('/about')
            }
        }
    }
</script>