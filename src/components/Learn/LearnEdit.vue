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
    </div>
</template>