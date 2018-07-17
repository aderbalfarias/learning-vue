<template>
    <div class="container">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my Name</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                    :myName="name"
                    @nameWasReset="name = $event"
                    :resetFn="resetName"
                    :userAge="age">
                    <div slot="first">
                        <h2>Testing slot</h2>
                        <p>It works</p>
                    </div>
                    <div>
                        <p>Another slot witout specification</p>
                    </div>
                </app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                    :userAge="age"
                    @ageWasEdited="age = $event">
                </app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        name: 'User',
        data: function () {
            return {
                name: 'Aderbal',
                age: 25
            };
        },
        methods: {
            changeName() {
                this.name = 'Anonymous';
            },
            resetName() {
                this.name = 'Aderbal';
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>
