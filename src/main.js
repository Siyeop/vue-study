// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0,
        userName: 'sapp'
    },

    actions: {
        increment(store, payload) {
            store.commit('increment', payload);
        },
        decrement(state, payload) {
            state.commit('decrement', payload);
        }
    },

    mutations: {
        increment(state, payload) {
            state.count = payload;
        },
        decrement(state, payload) {
            state.count = payload;
        }
    },
    getters: {
        getCount(state) {
            return state.count;
        },
        getUserName(state) {
            return state.userName;
        }
    }
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    store
})


