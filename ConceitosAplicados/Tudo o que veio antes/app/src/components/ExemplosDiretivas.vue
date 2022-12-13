<template>
    <div v-show="showName">{{ fullName }}</div>

    <div>
        <h1>Ligação de Dados</h1>

        <h2 :class="classVar">XXX</h2>
        <h2 :class="{'title': false, 'title-home': isHome}">YYY</h2>
        
        <p :class="pClass">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem at eos qui deleniti minus numquam repellendus! Culpa minus ducimus numquam, repellat sit eligendi eius harum accusamus suscipit illo sunt dignissimos!
        </p>
    </div>

    <div>
        <div>
            <h1>Ligação de Dados Bidirecional</h1>
            <label>Nome: </label>
            <input v-model="name" type="text"/>

            <br><br>

            {{ name }}
        </div>

        <div>
            <label>Esporte: </label>
            <select v-model="sports">
                <option value="">Escolha</option>
                <option value="Futebol">Futebol</option>
                <option value="Basquete">Basquete</option>
                <option value="Vôlei">Vôlei</option>
            </select>

            <br><br>

            {{ sports }}
        </div>

        <div>
            <label>Opção: </label>
            <br>
            <input v-model="opcao" type="radio" value="Sim"> Sim
            <input v-model="opcao" type="radio" value="Não"> Não

            <br>
            <br>

            {{ opcao }}
        </div>

        <div>
            <label>Checkbox: </label>
            <br>
            <input v-model="checkbox" type="checkbox"> Aceitar

            <br>
            <br>

            {{ checkbox }}
        </div>

        <div>
            <label>Cores Favoritas: </label>
            <br>
            <input v-model="colors" type="checkbox" value="Azul"> Azul
            <br>
            <input v-model="colors" type="checkbox" value="Amarelo"> Amarelo
            <br>
            <input v-model="colors" type="checkbox" value="Verde"> Verde
            <br>
            <input v-model="colors" type="checkbox" value="Vermelho"> Vermelho

            <br>
            <br>

            {{ colors }}
        </div>
    </div>

    <div>
        <button v-on:click="onClick">
            Click
        </button>
    </div>

    <div @mouseover="onMouseOver" @mouseout="onMouseOut">
            Olá
    </div>

    <div>
        <h1>To do's</h1>
        <div v-for="(todo, index) in todos" :key="todo.id" class="todos-items">
            <input type="checkbox" v-model="todo.completed"/>
            <img v-if="todo.img" :src="todo.img"/>
            {{ index }} - {{ todo.title }} <span>{{ "(" + todo.completed + ")"}}</span>
        </div>

        <h2>To do's em aberto</h2>
        <div v-for="(todo, index) in uncompletedTodos" :key="todo.id" class="todos-items">
            <img v-if="todo.img" :src="todo.img"/>
            {{ index }} - {{ todo.title }} <span>{{ "(" + todo.completed + ")"}}</span>
        </div>

        <br>

        <h2>To do's completas</h2>
        <div v-for="(todo, index) in completedTodos" :key="todo.id" class="todos-items">
            <img v-if="todo.img" :src="todo.img"/>
            {{ index }} - {{ todo.title }} <span>{{ "(" + todo.completed + ")"}}</span>
        </div>
    </div>

    <div>
        <form action="https://google.com" v-on:submit="onSubmit">
            <button type="submit">
                Enviar
            </button>
        </form>
    </div>

    <div>
        <select v-model="pageCount">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
        </select>
        <br><br>
        {{ pageCount + " Páginas"}}
    </div>

    <div>
        <input v-model="user.firstName" type="text"/>
        <br><br>
        <input v-model="user.lastName" type="text"/>
        <br><br>
        {{ user.firstName }} {{ user.lastName }}
    </div>

</template>

<script>
    export default {
        name: 'ExemplosDiretivas',
        data() {
            return {
                user: {
                    firstName: 'Livia',
                    lastName: 'Di Onofre',
                },
                showName: true,
                classVar: 'title',
                isHome: true,
                pClass: ['text', 'text-home'],
                name: "Liv",
                sports: "",
                opcao: "",
                checkbox: true,
                colors: [],
                pageCount: 5,
                todos: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "delectus aut autem",
                        "completed": false,
                        "img": "https://via.placeholder.com/20",
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "quis ut nam facilis et officia qui",
                        "completed": false,
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "fugiat veniam minus",
                        "completed": false,
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "et porro tempora",
                        "completed": true,
                        "img": "https://via.placeholder.com/20",
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                        "completed": true,
                        "img": "https://via.placeholder.com/20",
                    },
                ]

            }
        },

        watch:{
            name(vl){
                if(vl.length >= 3){
                    this.saveUserName();
                }
            },
            pageCount(){
                this.changePage();
            },
            user: {
                handler(){
                    console.log('user changed');
                },
                deep: true,
            },
        },

        methods: {
            onClick() {
                console.log("Click");
            },
            onMouseOver(){
                console.log("Olá");
            },
            onMouseOut(){
                console.log("Tchau");
            },
            onSubmit(){
                console.log("Submit");
            },
            saveUserName(){
                console.log('Ajax');
                console.log(this.name);
            },
            changePage(){
                console.log('Ajax');
                console.log(this.pageCount);
            },
        },

        computed: {
            fullName(){
                return `${this.user.firstName} ${this.user.lastName}`
            },
            uncompletedTodos(){
                return this.todos.filter(todo => !todo.completed)
            },
            completedTodos(){
                return this.todos.filter(todo => todo.completed)
            },
        },

        beforeCreate(){
            console.log('beforeCreate');
        },

        created(){
            console.log('created');
        },

        beforeMount(){
            console.log('beforeMount');
        },

        mounted(){
            console.log('mounted');
        },
        
        beforeDemount(){
            console.log('beforeDemount');
        },
            

        unmounted(){ 
            console.log('unmounted');
        },
    }
</script>

<style>
    .title {
        color: rgb(130, 205, 17);
        padding: 0px;
    }

    .title-home{
        color: green;
        padding: 0px;
    }

    .text{
        color: #fefefe;
        background-color: gray;
        padding: 10px
    }

    .text-home{
        color: #000;
        background-color: rgb(0, 162, 255);
    }

    .todos-items {
        background-color: #aaa;
        color: #fefefe;
        padding: 5px;
        margin-top: 6px;
        text-align: justify;
    }

    div{
        margin-top: 50px;
    }
</style>