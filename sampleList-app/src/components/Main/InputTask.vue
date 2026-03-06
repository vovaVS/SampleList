<script setup>
import { ref } from "vue";
import AddTaskButton from "./AddTaskButton.vue";
const contentInput = ref("");
const emit = defineEmits(["createTask"]);

const createtask = () => {
  emit("createTask", contentInput.value);
  contentInput.value = "";
};
</script>

<template>
  <section class="user_input_section">
    <div class="input_section__wrapper">
      <input
        class="input_user_wrap"
        type="text"
        value="contentInput"
        v-model="contentInput"
        placeholder="Add a ToDo!"
      />
      <AddTaskButton :contentInput @click="createtask" />
    </div>
  </section>
</template>

<style scoped>
.user_input_section {
  display: flex;
}
.input_user_wrap {
  width: 64%;
  height: 55px;
  border: none;
  -webkit-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  -moz-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  position: relative;
  padding-left: 15px;
  outline: none;
}

.input_section__wrapper {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
</style>
