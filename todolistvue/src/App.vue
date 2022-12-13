<template>
	<div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

            <ToDoSpinner v-if="loading"/>

            <template v-else>
                <ToDoFormAdd />

                <ToDoItems v-if="$store.state.todos.length"/>

                <ToDoEmpty v-else/>
            </template>
            
        </div>
    </div>
</template>


<script>
import ToDoSpinner from './components/ToDoSpinner.vue';
import ToDoFormAdd from './components/ToDoFormAdd.vue';
import ToDoItems from './components/ToDoItems.vue';
import ToDoEmpty from './components/ToDoEmpty.vue';

    export default {
        name: 'App',

        data(){
            return {
                loading: false,
            }
        },
        
        components: {
            ToDoSpinner,
            ToDoFormAdd,
            ToDoItems,
            ToDoEmpty,
        },

        created() {
            this.loading = true;
            this.$store.dispatch('getToDos').finally(() => {
                this.loading = false;
            });
        },
    };
</script>