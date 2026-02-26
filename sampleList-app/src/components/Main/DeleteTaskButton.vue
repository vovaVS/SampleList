<script setup>
import DeleteTaskIcon from "./icons/deleteTaskIcon.vue";
const emit = defineEmits(['click'])
</script>

<template>
  <button class="delete_task" @click="emit('click')">
    <DeleteTaskIcon />
  </button>
</template>

<style scoped>
.delete_task {
  width: 50px;
  height: 30px;
  border: none;
  color: red;
}
</style>