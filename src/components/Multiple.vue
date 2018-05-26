<template>
    <section class="container">
        <app-posts></app-posts>
        <hr>
        <app-search></app-search>
    </section>        
</template>

<script>
import Posts  from './Posts';
import Search  from './Search';
export default {
    components: {
        'app-posts': Posts,
        'app-search': Search,
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
