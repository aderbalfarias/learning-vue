import Home from './components/Home/Home.vue';
// import Nav from './components/Shared/Nav.vue';

// import Posts from './components/Post/Posts.vue';
// import Search from './components/Search/Search.vue';
// import TestRoute from './components/Example/TestRoute.vue';
// import BasicExamples from './components/Example/Basic.vue';
// import Tree from './components/Tree/Tree.vue';
// import Game from './components/Game/Game.vue';
// import Dreams from './components/Dream/Dreams.vue';
// import Multiple from './components/Example/Multiple.vue';
// import User from './components/User/User.vue';
// import Dynamic from './components/Dynamic/Dynamic.vue';
// import Quote from './components/Quote/Index.vue';
// import Form from './components/Form/Index.vue';
// import FilterAndMixin from './components/FilterAndMixin/Index.vue';
// import Style from './components/Style/Index.vue';
// import Learn from './components/Learn/Learn.vue';
// import LearnStart from './components/Learn/LearnStart.vue';
// import LearnDetail from './components/Learn/LearnDetail.vue';
// import LearnEdit from './components/Learn/LearnEdit.vue';
// import GetAndPost from './components/GetAndPost/Index.vue';

// It allows to use lazy load concept, it will only load when called
const Posts = resolve => {
    require.ensure(['./components/Post/Posts.vue'], () => {
        resolve(require('./components/Post/Posts.vue'));
    });
};

const Search = resolve => {
    require.ensure(['./components/Search/Search.vue'], () => {
        resolve(require('./components/Search/Search.vue'));
    });
};

const TestRoute = resolve => {
    require.ensure(['./components/Example/TestRoute.vue'], () => {
        resolve(require('./components/Example/TestRoute.vue'));
    });
};

const BasicExamples = resolve => {
    require.ensure(['./components/Example/Basic.vue'], () => {
        resolve(require('./components/Example/Basic.vue'));
    });
};

const Tree = resolve => {
    require.ensure(['./components/Tree/Tree.vue'], () => {
        resolve(require('./components/Tree/Tree.vue'));
    });
};

const Game = resolve => {
    require.ensure(['./components/Game/Game.vue'], () => {
        resolve(require('./components/Game/Game.vue'));
    });
};

const Dreams = resolve => {
    require.ensure(['./components/Dream/Dreams.vue'], () => {
        resolve(require('./components/Dream/Dreams.vue'));
    });
};

const Multiple = resolve => {
    require.ensure(['./components/Example/Multiple.vue'], () => {
        resolve(require('./components/Example/Multiple.vue'));
    });
};

const User = resolve => {
    require.ensure(['./components/User/User.vue'], () => {
        resolve(require('./components/User/User.vue'));
    });
};

const Dynamic = resolve => {
    require.ensure(['./components/Dynamic/Dynamic.vue'], () => {
        resolve(require('./components/Dynamic/Dynamic.vue'));
    });
};

const Quote = resolve => {
    require.ensure(['./components/Quote/Index.vue'], () => {
        resolve(require('./components/Quote/Index.vue'));
    });
};

const Form = resolve => {
    require.ensure(['./components/Form/Index.vue'], () => {
        resolve(require('./components/Form/Index.vue'));
    });
};

const FilterAndMixin = resolve => {
    require.ensure(['./components/FilterAndMixin/Index.vue'], () => {
        resolve(require('./components/FilterAndMixin/Index.vue'));
    });
};

const Style = resolve => {
    require.ensure(['./components/Style/Index.vue'], () => {
        resolve(require('./components/Style/Index.vue'));
    });
};

const GetAndPost = resolve => {
    require.ensure(['./components/GetAndPost/Index.vue'], () => {
        resolve(require('./components/GetAndPost/Index.vue'));
    });
};

const Learn = resolve => {
    require.ensure(['./components/Learn/Learn.vue'], () => {
        resolve(require('./components/Learn/Learn.vue'));
    }, 'learn');
};

const LearnStart = resolve => {
    require.ensure(['./components/Learn/LearnStart.vue'], () => {
        resolve(require('./components/Learn/LearnStart.vue'));
    }, 'learn');
};

const LearnEdit = resolve => {
    require.ensure(['./components/Learn/LearnEdit.vue'], () => {
        resolve(require('./components/Learn/LearnEdit.vue'));
    }, 'learn');
};

const LearnDetail = resolve => {
    require.ensure(['./components/Learn/LearnDetail.vue'], () => {
        resolve(require('./components/Learn/LearnDetail.vue'));
    }, 'learn');
};

const VuexExample = resolve => {
    require.ensure(['./components/VuexExample/Index.vue'], () => {
        resolve(require('./components/VuexExample/Index.vue'));
    }, 'vuexex');
};

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
        path: '/vuex', component: VuexExample
    },
    {   
        path: '/redirect-me', redirect: { name: 'home' } 
    },
    {   path: '*', redirect: '/' }
];