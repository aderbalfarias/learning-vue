import * as types from './types';


export default {
    [types.UPDATE_VALUE]: ({commit}, payload) => {
        commit(types.MUTATE_UPDATE_VALUE, payload)
    },
    [types.MARKET_LOAD_DATA]: ({commit}) => {
        Vue.http.get('market.json')
            .then(response => response.json())
            .then(data => {
                if (data) {
                    const stocks = data.stocks;
                    const funds = data.funds;
                    const stockPortfolio = data.stockPortfolio;
    
                    const portfolio = {
                        stockPortfolio,
                        funds
                    };
    
                    commit(types.MUTATE_SET_STOCKS, stocks);
                    commit(types.MUTATE_SET_PORTFOLIO, portfolio);
                }
            });
    }
};