<template>
    <div class="product">
        {{ product.name }} - {{ product.price }}

        <button @click="addToCart()">
            Adicionar ao carrinho
        </button>

        <button @click="removeFromCart()">
            Remover do carrinho
        </button>
    </div>
</template>

<script>
    export default {
        name: 'AppProduct',

        props: {
            product: {
                type: Object,
                required: true,
            }
        },

        methods: {
            addToCart(){
                this.$store.commit('addToCart', this.product);
            },
            removeFromCart(){
                this.$store.commit('removeFromCart', this.product);
            }
        }
    }
</script>

<style>
    .product {
        border: 1px solid #ccc;
        padding: 10px;
        width: 150px;
        margin: auto;
        margin-bottom: 10px;
    }
</style>