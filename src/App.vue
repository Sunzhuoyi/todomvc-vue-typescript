<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>Todos</h1>
      </header>
      <todo-input />
      <router-view></router-view>
    </section>
    <footer class="info">
			<p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
			<p>Created by <a href="https://github.com/galenyuan">Galen</a></p>
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
