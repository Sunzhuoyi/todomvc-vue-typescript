<template>
  <li>
    <div class="view">
      <input class="toggle" type="checkbox">
      <label>{{ item.content }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="Rule the web">
  </li>
</template>

<script lang="ts">
  export default {
    props: {
      item: Object
    }
  }
</script>
