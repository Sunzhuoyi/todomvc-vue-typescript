<template>
  <li :class="{ completed: item.isCompleted }">
    <div class="view" @click="completeTodoItem">
      <input class="toggle" type="checkbox" disabled v-model="item.isCompleted">
      <label>{{ item.content }}</label>
      <button class="destroy" type="button" @click="removeItem"></button>
    </div>
    <input class="edit" value="Rule the web">
  </li>
</template>

<script lang="ts">
  import { MUTATIONS } from '@/store'

  export default {
    props: {
      item: Object
    },

    methods: {
      removeItem () {
        this.$store.commit(MUTATIONS.REMOVE_TODOITEM, this.item.id)
      },

      completeTodoItem () {
        this.$store.commit(MUTATIONS.TOGGLE_COMPLETE, this.item.id)
      }
    }
  }
</script>
