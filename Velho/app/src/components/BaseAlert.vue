<template>
    <div :class="baseAlert">
        <slot />

        <button @click="onClick()"> X </button>
    </div>
</template>

<script>
    export default {
        name: 'BaseAlert',
        props: {
            variant: {
                type: String,
                default: '',
            }
        },

        computed:{
            baseAlert(){
                return[
                    'alert', 
                    this.variant ? `alert-${this.variant}` : ''
                ]
            },
        },

        methods:{
            onClick(){
                this.$emit('close')
            },
        }
    }
</script>

<style scoped>
    .alert{
        display: flex;
        justify-content: space-between;
        color: #000000;
        background-color: #dddddd;
        border-radius: 3px;
        box-shadow: 0 1px 2px rgba(8, 9, 7, 0.505);
        margin-bottom: 20px;
        margin-top: 20px;
        padding: 10px;
    }

    .alert-success{
        color: #fefefe;
        background-color: #44b55b;
        box-shadow: 0 1px 2px rgba(37, 124, 10, 0.505);
    }

    .alert-danger{
        color: #fefefe;
        background-color: #e74c3c;
        box-shadow: 0 1px 2px rgba(124, 10, 10, 0.505);
    }

    .alert-warning{
        color: #000000;
        background-color: #f1c40f;
        box-shadow: 0 1px 2px rgba(124, 103, 10, 0.505);
    }
</style>