import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import portfolio from './modules/portfolio';
import stocks from './modules/stocks';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter,
        portfolio: portfolio,
        stocks: stocks
    }
});