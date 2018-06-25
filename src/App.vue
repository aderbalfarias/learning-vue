<template>
    <div id="app">
        <!-- <img src="./assets/logo.png"> -->
        <Nav/>
        <router-view></router-view>

        <!-- <router-view name="header-top"></router-view>
        <router-view></router-view>
        <router-view name="header-bottom"></router-view> -->
    </div>
</template>

<script>
    import Nav from './components/Shared/Nav';

    export default {
        name: 'App',
        components: {
            Nav
        }
    }
</script>

<style>
    @import "../node_modules/bootstrap/dist/css/bootstrap.css";
    /* @import "../node_modules/animate.css/animate.css"; */
</style>
