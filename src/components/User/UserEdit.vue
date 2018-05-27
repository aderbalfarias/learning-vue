<template>
    <div class="component">
        <h3>User Edit</h3>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
    import {eventBus} from '../../main';

    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge = 20;
                // this.$emit('ageWasEdited', this.userAge);
                eventBus.$emit('ageWasEdited', this.userAge);
                // eventBus.changeAge(this.userAge);
            }
        }
    }
</script>

<style scoped>
</style>