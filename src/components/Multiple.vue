<template>
    <section class="container">
        <app-posts></app-posts>
    </section>        
</template>

<script>
    import Posts  from './Posts';
    export default {
        components: {
            'app-posts': Posts
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
