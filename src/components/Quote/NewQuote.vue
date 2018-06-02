<template>
    <div>
        <form class="border border-dark radius-4 mt-2 mb-2">
            <div class="form-group">
                <div class="col-sm-8 col-xs-12 col-md-12 pt-2">
                    <textarea class="form-control" rows="3" v-model="quote"></textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-8 col-xs-12 col-md-12 pt-2">
                    <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: ''
            };
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>
    .radius-4 {
        border-radius: 4px!important;
    }
</style>