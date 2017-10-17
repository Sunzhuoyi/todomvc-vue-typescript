<template>
  <div>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      v-model="value"
      @keydown="handleKeyDown"
    />
  </div>
</template>

<script lang="ts">
  import { MUTATIONS } from '@/store'

  export default {
    data () {
      return {
        value: ''
      }
    },

    methods: {
      handleKeyDown (event) {
        if (event.code === 'Enter' && this.value !== '') {
          const store = this.$store

          store.commit(MUTATIONS.ADD_TODOITEM, {
            id: store.state.todoList.length,
            content: this.value,
            isCompleted: false
          })

          window.setTimeout(() => {
            this.value = ''
          }, 100)
        }
      }
    }
  }
</script>
