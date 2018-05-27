// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from './components/Home/Home.vue';
import Posts from './components/Post/Posts.vue';
import Search from './components/Search/Search.vue';
import TestRoute from './components/Example/TestRoute.vue';
import BasicExamples from './components/Example/Basic.vue';
import Tree from './components/Tree/Tree.vue';
import Game from './components/Game/Game.vue';
import Dreams from './components/Dream/Dreams.vue';
import Multiple from './components/Example/Multiple.vue';
import User from './components/User/User.vue';

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
        path: '/basicexamples', component: BasicExamples
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
    },
    {
        path: '/user', component: User
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

export const eventBus = new Vue();