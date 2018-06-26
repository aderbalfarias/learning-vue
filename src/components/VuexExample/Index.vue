<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <app-another-counter></app-another-counter>
                <hr>
                <input type="text" v-model="value">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './Counter.vue';
    import AnotherCounter from './AnotherCounter.vue';
    import Result from './Result.vue';
    import AnotherResult from './AnotherResult.vue';
    import * as types from '../../store/types';

    export default {
        computed: {
            value: {
                get() {
                    return this.$store.getters[types.VALUE];
                },
                set(value) {
                    this.$store.dispatch(types.UPDATE_VALUE, value);
                }
            }
        },
        methods: {
            updateValue(event) {
                this.$store.dispatch(types.UPDATE_VALUE, event.target.value);
            }
        },
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
            appAnotherResult: AnotherResult,
        }
    }
</script>