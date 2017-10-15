<template>
  <div>
    <section class="todoapp">
      <!-- This section should be hidden by default and shown when there are todos -->
			<section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					<todo-item v-for="item in todoList" :item="item" :key="item.id" />
				</ul>
			</section>
			<!-- This footer should hidden by default and shown when there are todos -->
			<footer class="footer">
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong>0</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
					<li>
						<a class="selected" href="#/">All</a>
					</li>
					<li>
						<a href="#/active">Active</a>
					</li>
					<li>
						<a href="#/completed">Completed</a>
					</li>
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed">Clear completed</button>
			</footer>
		</section>
  </div>
</template>

<script lang="ts">
  import { mapState } from 'vuex'
  import TodoItem from '@/components/TodoItem.vue'

  export default {
    computed: {
      ...mapState(['todoList'])
    },

    components: {
      TodoItem
    }
  }
</script>
