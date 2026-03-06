<script setup>
const text = defineProps(["contentInput"]);
const emit = defineEmits(['click'])
</script>

<template>
  <button
    class="submit_buttonInput"
    :disabled="contentInput === ''"
    @click="emit('click')"
  >
    Add
  </button>
</template>

<style scoped>
.submit_buttonInput {
  width: 200px;
  height: 55px;
  background-color: #0080fc;
  font-size: 1rem;
  color: #fff;
  -webkit-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  -moz-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  border: none;
  outline: none;
  border-radius: 5px;
}
.contentTask {
  margin-top: 50px;
}
.content_card {
  min-height: 120px;
  display: inline-block;
  align-items: center;
  word-wrap: break-word;
  padding: 0 15px;
}
</style>
