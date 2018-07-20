<template>
    <div class="col-sm-6 col-md-4">        
        <div class="card text-center mt-2">
            <div class="card-header">
                {{ stock.name }}                    
            </div>
            <div class="card-body">
                <h5 class="card-title">Quantity: {{ stock.quantity }}</h5>
                <div class="card-text">
                    <input
                        type="number"
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{ 'border-danger': insufficientQuantity }">
                </div>
                <button
                    class="btn btn-success mt-2"
                    @click="sellStock"
                    :disabled="insufficientQuantity || quantity <= 0">
                        {{ insufficientQuantity ? 'Not enough' : 'Sell' }}
                </button>
            </div>
            <div class="card-footer text-muted">
                <small>Price: {{ stock.price }}</small>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    import * as types from '../../store/types';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientQuantity() {
                return this.quantity > this.stock.quantity;
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: types.SELL_STOCK
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>