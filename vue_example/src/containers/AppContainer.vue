<template>
    <div>
        <input
                v-model="newTodoText"
                v-on:keyup.enter="addNewTodo"
                placeholder="Add a todo"
        >
        <ul>
            <li
                    is="todo-item"
                    v-for="(todo, index) in todos"
                    v-bind:title="todo"
                    v-on:remove="todos.splice(index, 1)"
            ></li>
        </ul>
    </div>
</template>
<style>
    body{
        background-color:#ff0000;
    }
</style>
<script>
    import TodoItem from '../components/TodoItem.vue'
    export default{
        data(){
            return{
                message: 'Hello',
                name:'a',
                object: {
                    FirstName: 'John',
                    LastName: 'Doe',
                    Age: 30
                },
                newTodoText: '',
                todos: [
                    'Do the dishes',
                    'Take out the trash',
                    'Mow the lawn'
                ]
            }
        },
        mounted(){
            this.name="b"
        },
        computed: {
            reversedMessage: function () {
                console.log('计算属性被调用了')
                return this.message.split('').reverse().join('')
            }
        },
        methods: {
            addNewTodo: function () {
                this.todos.push(this.newTodoText)
                this.newTodoText = ''
            },
            reverseMessage: function () {
                console.log('方法被执行了')
                return this.message.split('').reverse().join('')
            }
        },
        components:{
            'todo-item':TodoItem
        }


    }
</script>
