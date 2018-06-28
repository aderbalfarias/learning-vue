import * as types from '../types';

const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    [types.MUTATE_BUY_STOCK]: (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }
        state.funds -= stockPrice * quantity;
    },
    [types.MUTATE_SELL_STOCK]: (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find(element => element.id == stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    [types.MUTATE_SET_PORTFOLIO]: (state, portfolio) => {
        state.funds = portfolio.funds;
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : [];
    }
};

const actions = {
    [types.SELL_STOCK]: ({commit}, order) => {
        commit(types.MUTATE_SELL_STOCK, order);
    }
};

const getters = {
    [types.STOCK_PORTFOLIO]: (state, getters) => {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    [types.FUNDS]: state => {
        return state.funds;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}