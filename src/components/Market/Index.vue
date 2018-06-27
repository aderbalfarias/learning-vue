<template>
    <div class="container">
        <div>
            <h1>Trade or View your Portfolio</h1>
            <h6>You may Save e Load your Data</h6>
            <h6>Click on 'End Day' to begin a New Day!</h6>
            <hr>
            <p>Your Funds: {{ funds | currency }}</p>
        </div>
        <div>
            <button @click="endDay" class="btn btn-primary mr-1">End Day</button>
            <button @click="saveData" class="btn btn-primary mr-1">Save Data</button>
            <button @click="loadData" class="btn btn-primary mr-1">Load Data</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
          return {
          }
        },
        created() {
            //verify
            this.$store.dispatch('initStocks');
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                fetchData: 'loadData'
            }),
            endDay() {
                this.randomizeStocks();
            },
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                };
                this.$http.put('market.json', data);
            },
            loadData() {
                this.fetchData();
            }
        }
    }
</script>
