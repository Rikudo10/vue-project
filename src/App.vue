<script>
import TodoList from "./todolist.vue"
import TodoItemForm from "./components/TodoItemForm.vue"
export default {
  components: {
    TodoList,
    TodoItemForm,
  },
  data(){
    return {
        todos: [
            {id: 1, name: "todo item", done: false},
            {id: 2, name: "todo item 2", done: false},
            {id: 3, name: "todo item 3", done: true}
        ]
    }
  },
}
</script>

<template>
    <div class="container">
        <TodoItemForm />
        <TodoList :data="todos" />
    </div>
</template>
