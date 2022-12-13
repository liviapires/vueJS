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
            const index = state.todos.findIndex(todo => todo.id === data.id);
            
            if (index >= 0){
                state.todos.splice(index, 1, data);
            } else {
                state.todos.unshift(data);
            }
        },

        deleteToDo (state, id){
            const index = state.todos.findIndex(todo => todo.id === id);
            
            if (index >= 0){
                state.todos.splice(index, 1);
            }
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
        },

        updateToDo({ commit }, { id, data }){
            axios.put(`http://localhost:3000/todos/${id}`, data)
                .then((response) => {
                    commit('storeToDo', response.data);
                })
        },

        deleteToDo({ commit }, id){
            axios.delete(`http://localhost:3000/todos/${id}`)
                .then(() => {
                    commit('deleteToDo', id);
                })
        }
    },

    getters: {
    
    },

    modules: {
    
    }
})