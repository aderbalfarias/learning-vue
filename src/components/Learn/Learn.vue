<template>
    <div>
        <h1>The Learning Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'Learn',
        methods: {
            navigateToHome() {
                this.$router.push({ name: 'home' });
            }
        }
    }
</script>