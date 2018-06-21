<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" tag="li" to="/"><a class="nav-link">Home</a></router-link>
                <router-link class="nav-item" tag="li" to="/posts"><a class="nav-link">Posts</a></router-link>
                <router-link class="nav-item" tag="li" to="/search"><a class="nav-link">Search</a></router-link>
                <router-link class="nav-item" tag="li" to="/basicexamples"><a class="nav-link">Basic Examples</a></router-link>
                <router-link class="nav-item" tag="li" to="/game"><a class="nav-link">Game</a></router-link>
                <router-link class="nav-item" tag="li" to="/dreams"><a class="nav-link">Dreams</a></router-link>
                <router-link class="nav-item" tag="li" to="/multiple"><a class="nav-link">Multiple</a></router-link>
                <router-link class="nav-item" tag="li" to="/user"><a class="nav-link">Users</a></router-link>
                <router-link class="nav-item" tag="li" to="/dynamic"><a class="nav-link">Dynamic</a></router-link>
                <router-link class="nav-item" tag="li" to="/quote"><a class="nav-link">Quote</a></router-link>
                <router-link class="nav-item" tag="li" to="/form"><a class="nav-link">Form</a></router-link>
                <router-link class="nav-item" tag="li" to="/filtermixin"><a class="nav-link">F and M</a></router-link>
                <router-link class="nav-item" tag="li" to="/style"><a class="nav-link">Style</a></router-link>
                <router-link class="nav-item" tag="li" to="/getandpost"><a class="nav-link">G and P</a></router-link>
                <!-- <router-link class="nav-item" tag="li" to="/tree"><a class="nav-link">Tree</a></router-link> -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="dropdown-item" to="/testroute">Route</router-link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>                      
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
