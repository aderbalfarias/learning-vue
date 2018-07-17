<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input class="form-control" type="text" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Mail</label>
                    <input class="form-control" type="text" v-model="user.email">
                </div>
                <button class="btn btn-primary" @click="submit">Submit</button>
                <hr>
                <!-- <input class="form-control" type="text" v-model="node"> -->
                <br><br>
                <button class="btn btn-primary" @click="fetchData">Get Data</button>
                <br><br>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(u, i) in users" :key="i">{{ u.username }} - {{ u.email }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        data() {
            return {
                user: {
                    username: '',
                    email: ''
                },
                users: [],
                // resource: {},
                // node: 'data'
            };
        },
        methods: {
            submit() {
               //this.$http.post('https://vuedb-92a60.firebaseio.com/data.json', this.user)
                Vue.http.post('data.json', this.user)
                    .then(response => {
                        console.log(response);
                    }, error => {
                        console.log(error);
                    });
                // this.resource.save({}, this.user);
                // this.resource.saveAlt(this.user);
            },
            fetchData() {
                //this.$http.get('https://vuedb-92a60.firebaseio.com/data.json')
                Vue.http.get('data.json')
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        const resultArray = [];
                        for (let key in data) {
                            resultArray.push(data[key]);
                        }
                        this.users = resultArray;
                    });
            }
        }
    }
</script>
