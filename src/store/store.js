import Vue from 'vue';
import Vuex from 'vuex';

// Now we are going to use Vuex plugin in Vue
Vue.use(Vuex);

export const store = new Vuex.Store({
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
    }
})