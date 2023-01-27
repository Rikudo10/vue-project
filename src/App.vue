<script>
let id = 0

export default {
  data() {
    return {
      newTodo: '',
      todolist: [
        { id: 1, text: 'item 1', done: true },
        { id: 2, text: 'item 2', done: true },
        { id: 3, text: 'item 3', done: false }
      ]
    }
  },
  methods: {
    addTodo() {
      this.todolist.push({ id, text: this.newTodo, done: false })
      this.newTodo = ''
    },
    removeTodo(todo) {
      this.todolist = this.todolist.filter((t) => t !== todo)
    }
  }
}
</script>

<template>
  <div class="div1">
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todolist" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">delete</button>
    </li>
  </ul>
</div>
</template>

<style>

.div1 {
  border: 3px solid red;
  padding: 10px;
  border-radius: 10px;
  background-color: blueviolet;
}

li {
  list-style: none;
  font-weight: bold;
  color: red;
  
}
input {
  margin-top: 50px;
}
.done {
  text-decoration: line-through;
}
</style>