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
  width: 80px;
  height: 49px;
  background-color: #5a6777;
  font-size: 1rem;
  color: #fff;
  -webkit-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  -moz-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  border-radius: 30px;
  border: none;
  position: absolute;
  left: 58%;
  outline: none;
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
