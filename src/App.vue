<template>
  <div id="app">
    <header class="header">
      <h1>Todos</h1>
    </header>
    <todo-input />
    <router-view></router-view>
    <footer class="info">
			<p>Double-click to edit a todo</p>
			<!-- Remove the below line ↓ -->
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			<!-- Change this out with your name and url ↓ -->
			<p>Created by <a href="http://todomvc.com">you</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script lang="ts">
  import TodoInput from './components/TodoInput.vue'
  import { ACTIONS } from '@/store'

  export default {
    name: 'app',

    created () {
      this.$store.dispatch(ACTIONS.GET_TODOLIST)
    },

    components: {
      TodoInput
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
