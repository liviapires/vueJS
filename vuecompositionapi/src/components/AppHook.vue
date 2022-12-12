<template>
    <div>
        Hook 
    </div>
</template>

<script>
import { 
    onBeforeMount,
    onMounted,
    onBeforeUnmount,
    onUnmounted,
} from 'vue';

    export default {


        setup() {
            onBeforeMount(() => {
                console.log('Antes da montagem')
            }),

            onMounted(() => {
                console.log('Depois da montagem')
            }),

            onBeforeUnmount(() => {
                console.log('Antes da desmontagem')
            }),

            onUnmounted(() => {
                console.log('Depois da desmontagem')
            })
        },
    }
</script>