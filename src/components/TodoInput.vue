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
  import { ACTIONS } from '@/store'

  export default {
    data () {
      return {
        value: ''
      }
    },

    methods: {
      handleKeyDown (event) {
        if (event.code === 'Enter') {
          this.$store.dispatch(ACTIONS.ADD_TODOITEM, { content: this.value })
        }
      }
    }
  }
</script>
