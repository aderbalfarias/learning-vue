<template>
    <div>
        <h3>Edit</h3>
        <p>Locale: {{ $route.query.locale }}</p>
        <p>Analytics: {{ $route.query.q }}</p>
        <router-link
            tag="button"
            :to="{ name: 'learnStart' }"
            class="btn btn-primary">
                Go Back to Start
        </router-link>
        <button class="btn btn-primary" @click="confirmed = true">Confirm</button>
        <div style="height: 1200px"></div>
        <div id="myid">test</div>
    </div>
</template>
<script>
    export default {
        data() {
          return {
              confirmed: false
          }
        },
        beforeRouteLeave(to, from, next) {
            if (this.confirmed) {
                next();
            } else {
                if (confirm('Are you sure?')) {
                    next();
                } else {
                    next(false);
                }
            }
        }
    }
</script>