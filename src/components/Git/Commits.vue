<template>
    <div class="container pt-1 pb-2 text-center">
        <h1>Latest Commits to learningvue repository</h1>
        
        <span class="pl-2" v-for="(branch, i) in branches" :key="i">
            <input type="radio"
                :id="branch"
                :value="branch"
                name="branch"
                v-model="currentBranch">
            <label :for="branch">{{ branch }}</label>
        </span>

        <p>AderbalFarias/learningvue@{{ currentBranch }}</p>
        
        <div class="card-columns">  
            <div class="card text-center p-3" v-for="(record, i) in commits" :key="i">
                <blockquote class="blockquote mb-0">
                    <p class="font-weight-bold">
                        <a :href="record.html_url" target="_blank" class="commit">
                            {{ record.sha.slice(0, 100) }}
                        </a>
                    </p>
                    <p>{{ record.commit.message | truncate }}</p>
                    <footer class="blockquote-footer">
                        <small class="font-weight-bold">
                            By <a :href="record.author.html_url" target="_blank">
                                {{ record.commit.author.name }}
                            </a>
                            <cite title="Source Title">
                                at {{ record.commit.author.date | formatDate }}
                            </cite>
                        </small>
                    </footer>
                </blockquote>
            </div>
        </div>
    </div>
</template>

<script>
    var limitPerPage = 10;
    var apiURL = 'https://api.github.com/repos/AderbalFarias/learningvue/commits?per_page=' + limitPerPage + '&sha=';

    export default {
        data() {
            return {
                branches: ['master', 'dev', 'bugfix', 'features'],
                currentBranch: 'master',
                commits: null
            }
        },
        created () {
            this.fetchData()
        },
        watch: {
            currentBranch: 'fetchData'
        },
        filters: {
            truncate: function (v) {
            var newline = v.indexOf('\n')
                return newline > 0 ? v.slice(0, newline) : v
            },
            formatDate: function (v) {
                return v.replace(/T|Z/g, ' ')
            }
        },
        methods: {
            fetchData: function () {
                var xhr = new XMLHttpRequest()
                var self = this
                xhr.open('GET', apiURL + self.currentBranch)
                xhr.onload = function () {
                    self.commits = JSON.parse(xhr.responseText)
                    console.log(self.commits[0].html_url)
                }
                xhr.send()
            }
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #f66;
    }
    li {
        line-height: 1.5em;
        margin-bottom: 20px;
    }
    .blockquote p:first-child {
        font-size: 0.7em;
    }
</style>
