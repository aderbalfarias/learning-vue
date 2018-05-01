<template>
<div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Nav/>
    <router-view></router-view>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Posts from './components/Posts'
import TestRoute from './components/TestRoute'

export default {
    name: 'App',
    components: {
        HelloWorld,
        Posts,
        TestRoute
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0;
}
</style>
