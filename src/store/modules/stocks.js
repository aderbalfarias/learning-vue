import stocks from '../../data/stocks';
import * as types from '../types';

const state = {
    stocks: []
};

const mutations = {
    [types.MUTATE_SET_STOCKS]: (state, stocks) => {
        state.stocks = stocks;
    },
    [types.MUTATE_RND_STOCKS]: (state) => {
        state.stocks.forEach(stock => {
            console.log(stock);
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};

const actions = {
    [types.BUY_STOCKS]: ({commit}, order) => {
        commit(types.MUTATE_BUY_STOCK, order);
    },
    [types.INIT_STOCKS]: ({commit}) => {
        commit(types.MUTATE_SET_STOCKS, stocks);
    },
    [types.RANDOMIZE_STOCKS]: ({commit}) => {
        commit(types.MUTATE_RND_STOCKS);
    }
};

const getters = {
    [types.STOCKS]: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};