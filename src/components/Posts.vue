<template>
<div>
    <p class="text-center">I'm Posting something</p>

    <div class="text-center">
        <button class="btn btn-info" v-on:click="get">
            Test Get
        </button>
        <br>
        <br>
        <button class="btn btn-info" v-on:click="post">
            Test Post
        </button>
    </div>
</div>
</template>

<script>
export default {
    name: 'Posts',
    data () {
        return {
            formData: {
                id: 0,
                userId: 1,
                title: 'test',
                body: 'ewtetgdgf',
            },
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        get: function() {
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.formData = response.data;
                console.log(this.formData);
            }, response => {
                console.log("error");
            });
        },
        post: function() {
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                userId: this.formData.userId,
                body: this.formData.body,
                title: this.formData.title
            }).then(function(data){
                console.log(data);
            });
        }
    }
}
</script>

<style scoped>
</style>
