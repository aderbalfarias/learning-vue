<template>
    <div>
        <h1>Filters & Mixins</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
    import { arrayMixin } from './ArrayMixin';

    export default {
        mixins: [arrayMixin],
        created() {
            console.log('Inside List Created Hook');
        }
    }
</script>

<style>
</style>