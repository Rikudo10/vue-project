<script>
import Todolist from './Todolist.vue'
import Todoitemform from './Todoitemform.vue'
import Post from './components/post.vue'
export default {
    components:{
        Todolist,
        Todoitemform,
        Post
    },
  data() {
    return {
      search: "",
      todos: [
        { id: 1, name: 'react' , done:false },
        { id: 2, name: 'vue.js' , done:false },
        { id: 3, name: 'angular' , done:false }
      ]
    }
  },
  methods: {
    putNewItemIntoTodolist(data){
    this.todos.push({
        id: this.nextId,
        name: data,
        done:false
    })
    },
    ChangeStatus(record){
        let v = this.todos.find(item => item.id === record.id)
        v.done = !v.done
    
    },

  },
  computed: {
    nextId(){
        return this.todos.length +1
    },
    ActiveTodos(){
        return this.todos.filter(value => value.done == false)

    },
    DoneTodos(){
        return this.todos.filter(value => value.done == true)
    },
    filteredtodos(){
      return this.todos.filter(post => post.name.includes(this.search))
    }
  }
}
</script>

<template>
    <div class="divclass1">
        <Todoitemform @onSubmit="putNewItemIntoTodolist($event)"/>
        <h2>All Todo items</h2>
        <Todolist :data="todos"  />

        <h3>Active Todos</h3>
        <Todolist :changeStatus="true"
         :data="ActiveTodos" @onChangeDoneStatus="ChangeStatus($event)" />
        <h4>Done Todos</h4>
        <Todolist :candelete="true" :data="DoneTodos" />
    </div>
    <div class="divclass2">
      <input type="text" v-model="search">
      <div v-for="post in filteredtodos" :key="post.id">
        <post :post="post" />
      </div>
    </div>

</template>
<style>
.divclass1{
  margin: 50px;
  padding: 50px;
  background-color: aquamarine;
  border-radius: 10px;
}
.divclass2{ 
  background-color: cyan;
  padding: 20px;
  border-radius: 10px;
}

.button2{
    outline: none;
    cursor: pointer;
    border: none;
    padding: 0.9rem 2rem;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    position: relative;
    display: inline-block;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 10px;
    border-radius: 20%;
    overflow: hidden;
    background: red;
    color: rgb(7, 7, 7);
       }
.button1 {
  color: black;
  background-color: red;
}
input {
  border: none;
  padding: 10px;
  outline: none;
  background-color: blueviolet;
  border-radius: 30px;
}
</style>