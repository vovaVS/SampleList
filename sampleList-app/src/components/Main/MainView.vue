<script setup>
import ContentTask from "./ContentTask.vue";
import InputTask from "./InputTask.vue";
import { onMounted, ref } from "vue";
import axios from "axios";
const task = ref([]);
onMounted(() => {
  axios.get("http://localhost:3000/").then((res) => {
    task.value = res.data;
  });
});

const createTask = (text) => {
  axios
    .post("http://localhost:3000/createTask", { content: text })
    .then((res) => {
      task.value.push(res.data);
      console.log(res.data);
    });
};
const deleteTask = (ID) => {
  axios.delete(`http://localhost:3000/${ID}`).then((res) => console.log(res));
  task.value = task.value.filter((rs) => rs.id !== ID);
};
</script>
<template>
  <main class="main">
    <div class="container main_wrapper">
      <InputTask @createTask="createTask" />
      <ContentTask @delTask="deleteTask" :task="task" />
    </div>
  </main>
</template>

<style scoped>
.main_wrapper {
  display: flex;
  flex-direction: column;
  min-height: 90vh;
}

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}
</style>
