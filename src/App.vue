<template>
<div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <Nav/>
    <router-view class="container"></router-view>
</div>
</template>

<script>
import Nav from './components/Nav'
import Posts from './components/Posts'
import TestRoute from './components/TestRoute'

export default {
    name: 'App',
    components: {
        Nav,
        Posts,
        TestRoute
    }
}
</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.css";
</style>
