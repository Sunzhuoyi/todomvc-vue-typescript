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
  import Vue from 'vue'
  import { MUTATIONS } from '@/store'

  export default Vue.extend({
    data () {
      return {
        value: ''
      }
    },

    methods: {
      handleKeyDown (event: { code: string }) {
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
  })
</script>
