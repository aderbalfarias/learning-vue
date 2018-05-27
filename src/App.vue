<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <Nav/>
        <router-view class="container"></router-view>
    </div>
</template>

<script>
    import Home from './components/Home/Home';
    import Nav from './components/Shared/Nav';
    import Posts from './components/Post/Posts';
    import TestRoute from './components/Example/TestRoute';
    import Examples from './components/Example/Basic';
    import Tree from './components/Tree/Tree';
    import Game from './components/Game/Game';
    import Dreams from './components/Dream/Dreams';
    import Multiple from './components/Example/Multiple';
    import User from './components/User/User';

    export default {
        name: 'App',
        components: {
            Home,
            Nav,
            Posts,
            TestRoute,
            Examples,
            Tree,
            Game,
            Dreams,
            Multiple,
            User
        }
    }
</script>

<style>
    @import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
