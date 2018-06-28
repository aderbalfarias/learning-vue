<template>
    <div class="container">
        <div class="row">
            <app-buy-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-buy-stock>
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
        created() {
            this.$store.dispatch(types.INIT_STOCKS);
        },
        computed: {
            stocks() {
                return this.$store.getters[types.STOCKS];
            }
        }
    }
</script>