<template>
<section class="text-center">
    <div>
        <a v-bind:href="url">{{ url }}</a>
        <br>
        <a :href="url">{{ url }}</a>
        <br>
        <div>
            <input v-model="message" type="text">
        </div>
        <p> {{ message }} </p>
    </div>

    <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div>
        <p v-for="item in items" :key="item.message">
            {{ item.message }}
        </p>
    </div>

    <div>
        <button v-on:click="count++">You clicked me {{ count }} times.</button>
    </div>
</section>
</template>

<script>
export default {
    name: 'Examples',
    data() {
        return {
            url: 'http://aderbalfarias.com.br/',
            message: '',
            checkedNames: [],
            items: [{
                    message: 'Foo'
                },
                {
                    message: 'Bar'
                }
            ],
            count: 0
        }
    }
}
</script>

<style scoped>
</style>
