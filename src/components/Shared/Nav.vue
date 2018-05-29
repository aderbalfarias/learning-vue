<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" :to="'/'">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/'">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/posts'">Posts</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/testroute'">Route</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/search'">Search</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/basicexamples'">Basic Examples</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/game'">Game</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/dreams'">Dreams</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/multiple'">Multiple</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/user'">Users</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="'/dynamic'">Dynamic</router-link>
                </li>
                <!-- <li class="nav-item">
                    <router-link class="nav-link" :to="'/tree'">Tree</router-link>
                </li> -->
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
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
