<template>
<div>
     <p>You can double click on an item to turn it into a folder.</p>

    <script type="text/x-template" id="item-template">
        <li>
            <div
            :class="{bold: isFolder}"
            @click="toggle"
            @dblclick="changeType">
            {{ model.name }}
            <span v-if="isFolder">[{{ open ? '-' : '+' }}]</span>
            </div>
            <ul v-show="open" v-if="isFolder">
                <item
                class="item"
                v-for="(model, index) in model.children"
                :key="index"
                :model="model">
                </item>
                <li class="add" @click="addChild">+</li>
            </ul>
        </li>
    </script>

    <ul id="demo">
        <item class="item" :model="treeData">
        </item>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Tree',
    data() {
        return {
            open: false,
            title: 'My Tree Example',
            children: [{
                    title: 'hello'
                },
                {
                    title: 'wat'
                },
                {
                    title: 'child folder',
                    children: [{
                            title: 'child folder',
                            children: [{
                                    title: 'hello'
                                },
                                {
                                    title: 'wat'
                                }
                            ]
                        },
                        {
                            title: 'hello'
                        },
                        {
                            title: 'wat'
                        },
                        {
                            title: 'child folder',
                            children: [{
                                    title: 'hello'
                                },
                                {
                                    title: 'wat'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    props: {
        model: Object
    },    
    computed: {
        isFolder: function () {
            return this.model.children &&
                this.model.children.length
        }
    },
    methods: {
        toggle: function () {
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        changeType: function () {
            if (!this.isFolder) {
                Vue.set(this.model, 'children', [])
                this.addChild()
                this.open = true
            }
        },
        addChild: function () {
            this.model.children.push({
                title: 'new stuff added'
            })
        }
    }
}
</script>

<style scoped>
.item {
    cursor: pointer;
}

.bold {
    font-weight: bold;
}

ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
}
</style>
