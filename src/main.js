// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue'
import Search from './components/Search.vue'
import TestRoute from './components/TestRoute.vue'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
    {
        path: '/posts', component: Posts
        
    },
    {
        path: '/testroute', component: TestRoute
    },
    {
        path: '/search', component: Search
    }
];

const router = new VueRouter({routes: routes});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router: router,
    components: { App },
    template: '<App/>'
})
