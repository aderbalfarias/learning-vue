<template>
    <div class="container">
        <div class="row">
        </div>

        <div v-if="Object.keys(stocks).length !== 0">
            <app-buy-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-buy-stock>
        </div>
        <div v-else class="text-center">
            <h3 class="text-info mt-2">There is no stocks available</h3>
            <h3 class="text-info mt-2">You should intialize the trader</h3>
        </div>
    </div>
</template>

<script>
    import BuyStock from './BuyStock.vue';
    import * as types from '../../store/types';

    export default {
        components: {
            appBuyStock: BuyStock
        },
        computed: {
            stocks() {
                return this.$store.getters[types.STOCKS];
            }
        }
    }
</script>