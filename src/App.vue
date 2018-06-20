<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <Nav/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Home from './components/Home/Home';
    import Nav from './components/Shared/Nav';
    import Posts from './components/Post/Posts';
    import TestRoute from './components/Example/TestRoute';
    import BasicExamples from './components/Example/Basic';
    import Tree from './components/Tree/Tree';
    import Game from './components/Game/Game';
    import Dreams from './components/Dream/Dreams';
    import Multiple from './components/Example/Multiple';
    import User from './components/User/User';
    import Dynamic from './components/Dynamic/Dynamic';
    import Quote from './components/Quote/Index';
    import Form from './components/Form/Index';
    import FilterAndMixin from './components/FilterAndMixin/Index';
    import Style from './components/Style/Index';
    import GetAndPost from './components/GetAndPost/Index';

    export default {
        name: 'App',
        components: {
            Home,
            Nav,
            Posts,
            TestRoute,
            BasicExamples,
            Tree,
            Game,
            Dreams,
            Multiple,
            User,
            Dynamic,
            Quote,
            Form,
            FilterAndMixin,
            Style,
            GetAndPost
        }
    }
</script>

<style>
    @import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
