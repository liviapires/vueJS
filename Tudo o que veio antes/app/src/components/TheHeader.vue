<template>
    <header class="header">
        <h1 v-if="$slots.title" class="title">
            <slot name="title"/>
        </h1>
        
        <div class="description">
            <slot name="description"/>
        </div>
        
        <div class="content">
            <slot />
        </div>
    </header>
</template>

<script>
    export default {
        name: 'TheHeader',
        mounted() {
            console.log(this.$slots)
        }
    }
</script>

<style>
    .header {
        color: white;
        background-color: #31209a;
        padding: 30px;
        text-align: center;
    }
</style>