<template>
    <div>
        <h3>Learn Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link tag="button" :to="link1" class="btn btn-primary">Go to Edit 1</router-link>
        <router-link tag="button" :to="link2" class="btn btn-primary">Go to Edit 2</router-link>
        <router-link tag="button" :to="link3" class="btn btn-primary">Go to Edit 3</router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                link1: {
                    name: 'learnEdit', 
                    params: { 
                        id: this.$route.params.id 
                    }
                },
                link2: {
                    name: 'learnEdit', 
                    params: { 
                        id: this.$route.params.id 
                    },
                    query: { 
                        locale: 'en', 
                        q: 100 
                    }
                },
                link3: {
                    name: 'learnEdit', 
                    params: { 
                        id: this.$route.params.id 
                    },
                    hash: '#myid'
                }
            }
        }
    }
</script>