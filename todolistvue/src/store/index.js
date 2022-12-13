import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        todos:[],
    },

    mutations: {
        storeToDos(state, data){
            state.todos = data;
        },
        storeToDo(state, data){
            state.todos.unshift(data);
        }
    },

    actions: {
        getToDos({ commit }){
            return axios.get('http://localhost:3000/todos')
                .then(response => {
                    commit('storeToDos', response.data);
                })
        },

        addToDo({ commit }, data){
            axios.post('http://localhost:3000/todos', data)
            .then(response => {
                commit('storeToDo', response.data);
            })
        }
    },

    getters: {
    
    },

    modules: {
    
    }
})