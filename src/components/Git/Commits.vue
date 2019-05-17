<template>
    <div>
        <h1>Latest Commits to this repository</h1>
        
        <div v-for="(branch, i) in branches" :key="i">
            <input type="radio"
                :id="branch"
                :value="branch"
                name="branch"
                v-model="currentBranch">
            <label :for="branch">{{ branch }}</label>
        </div>

        <p>AderbalFarias/learningvue@{{ currentBranch }}</p>
        
        <ul>
            <li v-for="(record, i) in commits" :key="i">
                <a :href="record.html_url" target="_blank" class="commit">
                    {{ record.sha.slice(0, 100) }}
                </a>
                - <span class="message">
                    {{ record.commit.message | truncate }}
                </span>
                <br>
                by <span class="author">
                    <a :href="record.author.html_url" target="_blank">
                        {{ record.commit.author.name }}
                    </a>
                </span>
                at <span class="date">
                    {{ record.commit.author.date | formatDate }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script>

    var apiURL = 'https://api.github.com/repos/AderbalFarias/learningvue/commits?per_page=3&sha='

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
</style>
