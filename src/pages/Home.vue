<template>
  <div>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main" v-if="todoList.length">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all" @click="toggleCompleteAll">Mark all as complete</label>
      <ul class="todo-list">
        <todo-item v-for="item in todoList" :item="item" :key="item.id" />
      </ul>
    </section>
    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{ left }}</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li v-for="(value, key) in types" :key="key">
          <router-link :class="{ selected: key === type }" :to="'/' + key">{{ value }}</router-link>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" type="button" @click="clearCompleted">Clear completed</button>
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import { State, TodoItem, MUTATIONS } from '../store'
  import TodoItemComponent from '@/components/TodoItem.vue'

  interface Data {
    types: {
      all: string,
      active: string,
      completed: string
    },
    isAllCompleted: boolean
  }

  export default Vue.extend({
    props: {
      type: String
    },

    data () {
      return {
        types: {
          all: 'All',
          active: 'Action',
          completed: 'Completed'
        },

        isAllCompleted: false
      }
    },

    computed: {
      ...mapState({
        todoList (state: State): TodoItem[] {
          const { todoList } = state
          switch (this.type) {
            case 'active':
              return todoList.filter((item: TodoItem) => !item.isCompleted)
            case 'completed':
              return todoList.filter((item: TodoItem) => item.isCompleted)
            default:
              return todoList
          }
        }
      })
    },

    methods: {
      clearCompleted () {
        console.log(this.type)
        this.$store.commit(MUTATIONS.CLEAR_COMPLETED)
      },

      toggleCompleteAll () {
        if (!this.isAllCompleted) {
          this.$store.commit(MUTATIONS.COMPLETE_ALL)
        } else {
          this.$store.commit(MUTATIONS.UNCOMPLETE_ALL)
        }
        this.isAllCompleted = !this.isAllCompleted
      }
    },

    components: {
      TodoItem: TodoItemComponent
    }
  })
</script>
