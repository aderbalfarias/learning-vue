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
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
        });
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit(types.MUTATE_BUY_STOCK, order);
    },
    initStocks: ({commit}) => {
        commit(types.MUTATE_SET_STOCKS, stocks);
    },
    randomizeStocks: ({commit}) => {
        commit(types.MUTATE_RND_STOCKS);
    }
};

const getters = {
    stocks: state => {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};