<template>
    <div class="container">
        <transition name="slide" mode="out-in">
            <app-sell-stock v-for="(stock, index) in stocks" :stock="stock" :key="index"></app-sell-stock>
        </transition>
    </div>                
</template>

<script>
    import {mapGetters} from 'vuex';
    import SellStock from './SellStock.vue';
    import * as types from '../../store/types';

    export default {
        computed: {
            ...mapGetters({
                stocks: types.STOCK_PORTFOLIO
            })
        },
        components: {
            appSellStock: SellStock
        }
    }
</script>

<style scoped>
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
</style>