// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Posts from './components/Posts.vue'
import Search from './components/Search.vue'
import TestRoute from './components/TestRoute.vue'
import Examples from './components/Examples.vue'
import Tree from './components/Tree.vue'
import Game from './components/Game.vue'
import Dreams from './components/Dreams.vue'
import Multiple from './components/Multiple.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
    {
        path: '/', component: Home
        
    },
    {
        path: '/posts', component: Posts
        
    },
    {
        path: '/testroute', component: TestRoute
    },
    {
        path: '/search', component: Search
    },
    {
        path: '/examples', component: Examples
    },
    {
        path: '/tree', component: Tree
    },
    {
        path: '/game', component: Game
    },
    {
        path: '/dreams', component: Dreams
    },
    {
        path: '/multiple', component: Multiple
    }
];

const router = new VueRouter({routes: routes});


Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    components: { App },
    template: '<App/>'
})

