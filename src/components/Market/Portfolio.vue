<template>
    <div>
        <app-sell-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-sell-stock>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import SellStock from './SellStock.vue';

    export default {
        computed: {
            ...mapGetters({
                stocks: 'stockPortfolio'
            })
        },
        components: {
            appSellStock: SellStock
        }
    }
</script>