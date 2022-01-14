import Vue from 'vue'
import Router from 'vue-router'
import Calc from '../components/Calc'
import Jest from "../components/Jest";
import Vuex from "../components/Vuex";

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', redirect: 'calc'},
        {path: '/calc', component: Calc},
        {path: '/vuex', component: Vuex},
        {path: '/jest', component: Jest},
    ]
})
