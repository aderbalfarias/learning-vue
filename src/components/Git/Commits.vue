<template>
    <div class="container pt-1 pb-2 text-center">
        <h1>Latest Commits to learningvue repository</h1>
      <div class="card-deck">  
        <div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>


        <div class="card border-success mb-3" style="max-width: 18rem;">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body text-success">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <div class="card-footer bg-transparent border-success">Footer</div>
</div>
</div>


        <span class="pl-2" v-for="(branch, i) in branches" :key="i">
            <input type="radio"
                :id="branch"
                :value="branch"
                name="branch"
                v-model="currentBranch">
            <label :for="branch">{{ branch }}</label>
        </span>

        <p>AderbalFarias/learningvue@{{ currentBranch }}</p>
        
        <ul class="list-group">
            <li class="" v-for="(record, i) in commits" :key="i">
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
    .author, .date {
        font-weight: bold;
    }
</style>
