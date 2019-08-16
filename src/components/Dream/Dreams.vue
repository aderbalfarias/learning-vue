<template>
    <div class="container">
        <section class="text-center">
            <h1>Am I here?</h1>
            <h1>Is it a test?</h1>
            <h2>test()</h2>
            <a v-on:click="getUp()">Get Up</a>
        </section>
    </div>
</template>

<script>
export default {        
    data() {
        return {
            name: 'Dreams',
            situation: "dreaming",
            list: []
        }
    },
    methods: {
        test: function() {
            return situation;
        },
        getUp: function() {
            situation = "I am awaken";
        }
    }
}
</script>
