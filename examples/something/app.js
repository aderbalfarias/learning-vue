new Vue({
    el: '#app',
    data: {
        url: 'http://aderbalfarias.com.br/',
        message: '',
        checkedNames: []
    }
});

var example1 = new Vue({
    el: '#example-1',
    data: {
        items: [{
                message: 'Foo'
            },
            {
                message: 'Bar'
            }
        ]
    }
});

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
});

new Vue({ 
    el: '#components-demo' 
});
