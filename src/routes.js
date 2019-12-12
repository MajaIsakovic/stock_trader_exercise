import Home from './components/Home.vue';
import Stocks from './components/stocks/Stocks.vue';
import Portfolio from './components/portfolio/Portfolio.vue';

// stock bundle
// const Stocks = resolve => {

//     require.ensure(['./components/stocks/stocks'], () => {
//         resolve(require('./components/stocks/stocks'));
//     }, 'stocks11')
// }
// const Stock = resolve => {

//     require.ensure(['./components/stocks/stock'], () => {
//         resolve(require('./components/stocks/stock'));
//     }, 'stocks')
// }

// portfolio bundle
// const Portfolio = resolve => {

//     require.ensure(['./components/portfolio/portfolio'], () => {
//         resolve(require('./components/portfolio'));
//     }, 'portfolio')
// }
// const StockPorfolio = resolve => {

//     require.ensure(['./components/portfolio/stock'], () => {
//         resolve(require('./components/portfolio/stock'));
//     }, 'portfolio')
// }

export const routes = [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/stocks", component: Stocks },
];