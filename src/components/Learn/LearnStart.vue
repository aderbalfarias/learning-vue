<template>
    <div>
        <p>Please select a subject</p>
        <hr>
        <ul class="list-group">
            <router-link
                tag="li"
                to="/learn/1"
                class="list-group-item"
                style="cursor: pointer">
                    Learn 1
            </router-link>
            <router-link
                tag="li"
                to="/learn/2"
                class="list-group-item"
                style="cursor: pointer">
                    Learn 2
            </router-link>
            <router-link
                tag="li"
                to="/learn/3"
                class="list-group-item"
                style="cursor: pointer">
                    Learn 3
            </router-link>
        </ul>
    </div>
</template>