<script setup>
import { userDataStore } from "@/stores/userDataStore";
import Card from "./Card.vue";
import InputTask from "./InputTask.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
defineProps({
  task: Array,
});
const idUser = userDataStore()
const emit = defineEmits(['delTask'])
const task = ref([]);

const delTask = (taskid) =>
{
  emit('delTask', taskid)
}

onMounted(() => {
  axios.get(`http://localhost:3000/${idUser.userData.id}`).then((res) => {
    task.value = res.data;
    console.log(res.data)
  });
});
const createTask = (text) => {
  axios
    .post("http://localhost:3000/createTask", {id_user: idUser.userData.id, content: text })
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
  <div class="task_main_manager">
    <InputTask @createTask="createTask" />
    <div class="contentTask">
    <div v-if="task.length <= 0" class="null__task">Список задач пуст</div>
    <TransitionGroup name="list" tag="div" class="taskList__wrapper">
      <Card
        v-for="res in task"
        :key="res.id"
        :taskID="res.id"
        :taskContent="res.content"
        :date="res.date"
        @deletetask="deleteTask"
      />
    </TransitionGroup>
  </div>
  </div>
</template>

<style scoped>

.task_main_manager
{
  display: flex;
  width: 87%;
  flex-direction: column;
  margin-top: 40px;
}
.taskList__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: max-content;
}

.contentTask {
  margin-top: 50px;
  overflow-x: auto;
  min-height: 75vh;
}
.content_card {
  min-height: 120px;
  display: inline-block;
  align-items: center;
  word-wrap: break-word;
  padding: 0 15px;
}

.null__task
{
  margin: 0 auto;
  font-size: 2rem;
}

.contentTask::-webkit-scrollbar-thumb
{
  width: 70px;
    background-color: rgb(87, 87, 206);
}
</style>
