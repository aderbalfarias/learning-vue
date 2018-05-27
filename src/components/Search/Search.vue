<template>
    <form class="text-center" v-cloak>
        <div class="bar">
            <input type="text" v-model="searchString" placeholder="Enter your search terms" />
        </div>

        <ul>
            <li v-for="article in filteredArticles" :key="article.url">
                <a v-bind:href="article.url">
                    <img v-bind:src="article.image" />
                </a>
                <p>{{article.title}}</p>
            </li>
        </ul>
    </form>
</template>

<script>
    export default {
        name: 'Search',
        data() {
            return {
                searchString: "",
                articles: [{
                        "title": "What You Need To Know About CSS Variables",
                        "url": "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
                        "image": "https://tutorialzine.com/media/2016/03/css-variables.jpg"
                    },
                    {
                        "title": "Freebie: 4 Great Looking Pricing Tables",
                        "url": "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
                        "image": "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg"
                    },
                    {
                        "title": "20 Interesting JavaScript and CSS Libraries for February 2016",
                        "url": "https://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
                        "image": "https://tutorialzine.com/media/2016/02/interesting-resources-february.jpg"
                    },
                    {
                        "title": "Quick Tip: The Easiest Way To Make Responsive Headers",
                        "url": "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
                        "image": "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png"
                    },
                    {
                        "title": "Learn SQL In 20 Minutes",
                        "url": "https://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
                        "image": "https://tutorialzine.com/media/2016/01/learn-sql-20-minutes.png"
                    },
                    {
                        "title": "Creating Your First Desktop App With HTML, JS and Electron",
                        "url": "https://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
                        "image": "https://tutorialzine.com/media/2015/12/creating-your-first-desktop-app-with-electron.png"
                    }
                ]
            }        
        },
        computed: {
            // A computed property that holds only those articles that match the searchString.
            filteredArticles: function () {
                var articles_array = this.articles,
                    searchString = this.searchString;

                if (!searchString) {
                    return articles_array;
                }

                searchString = searchString.trim().toLowerCase();

                articles_array = articles_array.filter(function (item) {
                    if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                        return item;
                    }
                })

                // Return an array with the filtered data.
                return articles_array;;
            }
        }
    }
</script>

<style scoped>
    @import "../../css/search.css";
</style>
