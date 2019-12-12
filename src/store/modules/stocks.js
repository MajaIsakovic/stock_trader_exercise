import stocks from '../../data/stocks';

const state = {
    stocks: [   

    ]
};

const mutations = {
    'SET_STOCKS' (state, stocks){
        state.stocks = stocks;
    },
    // 'RANDOM_STOCKS' (state) 
    'RANDOM_STOCKS' () {

    }
}

const actions = {
    buyStock: ({commit}) =>{
        commit();
    },
    setStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    // randomizeStocks: ({commit}, order) =>{
    randomizeStocks: ({commit}) =>{
        commit('RND_STOCKS');
    }
}

const getters = {
    stocks: state => {
        return state.stocks;
    }
}

export default {
    state,
    mutations, 
    actions, 
    getters
}