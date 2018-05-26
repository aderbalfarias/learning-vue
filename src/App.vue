<template>
<div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Nav/>
    <router-view class="container"></router-view>
</div>
</template>

<script>
import Home from './components/Home'
import Nav from './components/Nav'
import Posts from './components/Posts'
import TestRoute from './components/TestRoute'
import Examples from './components/Examples'
import Tree from './components/Tree'
import Game from './components/Game'
import Dreams from './components/Dreams'
import Multiple from './components/Multiple'

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
        Multiple
    }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
