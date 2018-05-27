<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-md-6 text-center">
                <button class="btn btn-info" v-on:click="get">
                    Test Get
                </button>
            </div>
            <div class="col-md-6 text-center">
                <button class="btn btn-info" v-on:click="post">
                    Test Post
                </button>
            </div>    
        </div>    
        <table class="table table-striped table-dark mt-3" v-if="formData.length" >
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            <tr v-for="item in formData" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.body }}</td>
            </tr>
        </table>    
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
