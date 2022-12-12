<template>
    <button @click="sendData">
        {{ variant }}
        <slot />
        <slot name="icon" />

    </button>
</template>

<script>

    export default{
        props:{
            variant:{
                type: String,
                default: 'danger'
            },
        },

        setup(props, { slots, emit }){
            console.log(slots)

            const sendData = () => {
                emit('update', props.variant)
            }

            return {
                sendData
            }
        }
    }

</script>