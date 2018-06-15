<template>
    <div class="container">
        <div class="mt-3">
       <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut" mode="out-in">
            <div v-if="show" class="mt-3">
                <p class="alert alert-info">its ok</p>
            </div>
        </transition>
        <button class="btn btn-info" @click="ChangeDiv">Click</button>
        
        </div>
    </div>
</template>

<script>
export default {
    name: "Style",
    data() {
        return {
            show: true,
            items: [1, 2, 3, 4]
        };
    },
    methods: {
        ChangeDiv: function() {
            this.show = !this.show;
            console.log(this.show);
        }
    }
};
</script>

<style scoped>
</style>