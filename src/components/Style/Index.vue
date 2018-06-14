<template>
    <div class="container">
        <transition-group name="fadeLeft" tag="ul">
            <li v-for="item in items" v-bind:key="item">
                {{ item }}
            </li>
        </transition-group>
    </div>
</template>

<script>
    export default {
        name: 'Style',
        data() {
            return {
                show: true,
                items: [1, 2, 3, 4]
            }
        }
    }
</script>

<style scoped>
</style>