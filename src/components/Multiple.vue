<template>
    <section class="container">
        <app-posts></app-posts>
        <hr>
        <appSearch></appSearch>
    </section>        
</template>

<script>
import Posts  from './Posts';
import Search  from './Search';
export default {
    components: {
        'app-posts': Posts,
        appSearch: Search, // it works as well without quotation marks
    },
    name: 'Multiple',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>
