<template>
    <div>
        <app-buy-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-buy-stock>
    </div>
</template>

<script>
    import BuyStock from './BuyStock.vue';

    export default {
        components: {
            appBuyStock: BuyStock
        },
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        }
    }
</script>