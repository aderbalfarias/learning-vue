<template>
    <div class="col-sm-6 col-md-4">
        <div class="card text-center">
            <div class="card-header">
                {{ stock.name }}                    
            </div>
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <div class="card-text">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{'border-danger': insufficientFunds}">
                </div>
                <button
                    class="btn btn-success"
                    @click="buyStock"
                    :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)">
                        {{ insufficientFunds ? 'Insufficient Funds' : 'Buy' }}
                </button>
            </div>
            <div class="card-footer text-muted">
                <small>(Price: {{ stock.price }})</small>
            </div>
        </div>
    </div>
</template>

<script>
    import * as types from '../../store/types';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters[types.FUNDS];
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch(types.BUY_STOCKS, order);
                this.quantity = 0;
            }
        }
    }
</script>