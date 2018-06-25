<template>
    <div>
        <h3>Learn Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
        <router-link
            tag="button"
            :to="{ name: 'learnEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
            class="btn btn-primary">
                Edit
        </router-link>
    </div>
</template>