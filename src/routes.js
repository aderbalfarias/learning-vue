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
import Dynamic from './components/Dynamic/Dynamic.vue';
import Quote from './components/Quote/Index.vue';
import Form from './components/Form/Index.vue';
import FilterAndMixin from './components/FilterAndMixin/Index.vue';
import Style from './components/Style/Index.vue';
import GetAndPost from './components/GetAndPost/Index.vue';
// import Nav from './components/Shared/Nav.vue';
import Learn from './components/Learn/Learn.vue';
import LearnStart from './components/Learn/LearnStart.vue';
import LearnDetail from './components/Learn/LearnDetail.vue';
import LearnEdit from './components/Learn/LearnEdit.vue';

export const routes = [
    {
        path: '', 
        component: Home, 
        name: 'home',
        comments: {
            default: Home,
            // 'header-top': Nav
        }
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
    },
    {
        path: '/dynamic', component: Dynamic
    },
    {
        path: '/quote', component: Quote
    },
    {
        path: '/form', component: Form
    },
    {
        path: '/filtermixin', component: FilterAndMixin
    },
    {
        path: '/style', component: Style
    },
    {
        path: '/getandpost', component: GetAndPost
    },
    { 
        path: '/learn', 
        components: {
            default: Learn,
            //'header-bottom': Nav
        }, 
        children: [
            { path: '', component: LearnStart, name: 'learnStart' },
            { 
                path: ':id', 
                component: LearnDetail,
                beforeEnter: (to, from, next) => {
                    console.log('inside route setup');
                    next(); //it allow to continue the normal execution
                    //next(false); //it will abort
                    //next({}); //path to redirect
                }
            },
            { path: ':id/edit', component: LearnEdit, name: 'learnEdit' }
        ] 
    },
    {   
        path: '/redirect-me', redirect: { name: 'home' } 
    },
    {   path: '*', redirect: '/' }
];