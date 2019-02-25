import Vue from 'vue';
import Vuex from 'vuex';

// Now we are going to use Vuex plugin in Vue
Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [{
                name: "Banana",
                price: 20
            },
            {
                name: "Orange",
                price: 40
            },
            {
                name: "Apple",
                price: 60
            },
            {
                name: "Mango",
                price: 80
            }
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                }
            })

            return saleProducts;
        }
    },
    mutations: {
        reducePrice: state => {
            state.products.forEach(product => {
                product.price -= 1;
            });
        }
    }
})