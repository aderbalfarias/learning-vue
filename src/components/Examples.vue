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

    <div>
        <input type="text" class="mt-2" placeholder="testing keyup" v-on:keyup="alertMe">        
        <input type="text" class="mt-2" placeholder="testing keyup.enter" v-on:keyup.enter="alertMe">        
        <input type="text" class="mt-2" placeholder="testing keyup.enter.space" v-on:keyup.enter.space="alertMe">        
    </div>

    <div>
        <button @click="counter++">You clicked me {{ counter }} times.</button>
    </div>

    <div id="example">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div>


    <div v-if="type === 'A'">
        <p>A</p>
    </div>
    <div v-else-if="type === 'B'">
        <p>B</p>
    </div>
    <div v-else-if="type === 'C'">
        <p>C</p>
    </div>
    <div v-else>
        <p>Not A/B/C</p>
    </div>

    <p v-show="ok">Olá!</p>

    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>
    <br>

    <select v-model="selected">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    <br>
    <select v-model="selected1">
        <option v-for="option in options" v-bind:value="option.value" :key="option.value">
            {{ option.text }}
        </option>
    </select>
    <span>Selected: {{ selected1 }}</span>
    <br>
    <select v-model="selected2" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <br>
    <span>Selected: {{ selected2 }}</span>


</section>
</template>

<script>
export default {
    name: 'Examples',
    data() {
        return {
            url: 'http://aderbalfarias.com.br/',
            message: 'ex',
            checkedNames: [],
            items: [{
                    message: 'Foo'
                },
                {
                    message: 'Bar'
                }
            ],
            count: 0,
            counter: 0,
            type: 'B',
            ok: false,
            test: 1,
            picked: '',
            selected: '',
            selected1: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            selected2: []           
        }
    },
    methods: {
        alertMe: function() {
            alert('Something happened!');
        }
    },
    watch: {
        counter: function() {
            console.log('The counter has changed!');
        }
    },
    computed: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
}
</script>

<style scoped>
</style>
