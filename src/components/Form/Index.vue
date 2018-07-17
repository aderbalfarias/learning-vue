<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input
                            type="text"
                            id="email"
                            class="form-control"
                            :value="userData.email"
                            @input="userData.email = $event.target.value">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            class="form-control"
                            v-model.lazy="userData.password">
                        <p>{{ userData.password }}</p>
                    </div>
                    <div class="form-group">
                        <label for="age">Age</label>
                        <input
                            type="number"
                            id="age"
                            class="form-control"
                            v-model="userData.age">
                    </div>

                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 form-group">
                    <label for="message">Message</label><br>
                    <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                    <textarea
                        id="message"
                        rows="5"
                        class="form-control"
                        placeholder="Write something here"
                        v-model="message">
                    </textarea>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <div class="form-group">
                        <label for="sendmail">
                            <input
                                type="checkbox"
                                id="sendmail"
                                value="SendMail"
                                v-model="sendMail"> 
                                Send Mail
                        </label>
                        <label for="sendInfomail">
                            <input
                                type="checkbox"
                                id="sendInfomail"
                                value="SendInfoMail"
                                v-model="sendMail"> 
                                Send Infomail
                        </label><!-- Also show for single checkbox with true/ false -->
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 form-group">
                    <label for="male">
                        <input
                            type="radio"
                            id="male"
                            value="Male"
                            v-model="gender"> 
                            Male
                    </label>
                    <label for="female">
                        <input
                            type="radio"
                            id="female"
                            value="Female"
                            v-model="gender"> 
                            Female
                    </label>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 from-group">
                    <label for="priority">Priority</label>
                    <select
                            id="priority"
                            class="form-control"
                            v-model="selectedPriority">
                        <option v-for="(priority, index) in priorities" :key="index">
                            {{ priority }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <app-switch v-model="dataSwitch"></app-switch>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                    <button
                        class="btn btn-primary"
                        @click.prevent="submitted">
                        Submit
                    </button>
                    <hr>
                </div>
            </div>
        </form>

        <div class="card border-success mb-3" v-if="isSubmitted">
            <div class="card-header">
                <h4>Your Data</h4>
            </div>
            <div class="card-body text-success">
                <h5 class="card-title">Success Submit</h5>
                <p>Mail: {{ userData.email }} </p>
                <p>Password: {{ userData.password }}</p>
                <p>Age: {{ userData.age }}</p>
                <p style="white-space: pre">Message: {{ message }}</p>
                <p><strong>Send Mail?</strong></p>
                <ul>
                    <li v-for="(item, index) in sendMail" :key="index">{{ item }}</li>
                </ul>
                <p>Gender:  {{ gender }}</p>
                <p>Priority: {{ selectedPriority }}</p>
                <p>Switched: {{ dataSwitch }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Switch from './Switch.vue';

    export default {
        name: 'Form',
        data () {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 0
                },
                message: '',
                sendMail: [],
                gender: 'Male',
                selectedPriority: 'High',
                priorities: ['High', 'Medium', 'Low'],
                dataSwitch: true,
                isSubmitted: false
            }
        },
        methods: {
            submitted() {
                this.isSubmitted = true;
            }
        },
        components: {
            appSwitch: Switch
        }
    }
</script>
