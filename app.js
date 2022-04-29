const app = new Vue({
    el:'#app',
    data: {
        todo: [
            'comprare pane',
            'bere acqua',
            'dici ciao'
        ],
        newtodo:"",
    },
    methods:{
        add: function(){
            this.todo.push(this.newtodo)
        },
        remove:function(i){
            this.todo.splice(i,1)
        }
    }

});