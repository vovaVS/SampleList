<script setup>
import DeleteTaskButton from "./DeleteTaskButton.vue";
const emit = defineEmits(['deletetask'])
const props = defineProps({ taskID: Number, taskContent: String, date:String});

const delTask = () =>
{
 emit('deletetask', props.taskID)
}
</script>
<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="title-card">{{ taskID }}</div>
      <div class="content_card">
        <p>{{ taskContent }}</p>
      </div>
      <div class="button_delete_task">
        <p class="date">{{ date }}</p>
        <DeleteTaskButton @click="delTask"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-width: 300px;
  min-height: 200px;
  display: flex;
  justify-content: center;
  background-color: #fff;
  -webkit-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  -moz-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  border-radius: 20px;
}

.card__wrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.title-card {
  display: flex;
  text-align: center;
  justify-content: center;
  height: 80px;
  background-color: #e9a49d;
  color: #fff;
  font-size: 1.2rem;
  align-items: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.button_delete_task {
  display: flex;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
  border: none;
  justify-content: space-between;
}
.content_card {
  min-height: 120px;
  display: inline-block;
  align-items: center;
  word-wrap: break-word;
  padding: 0 15px;
}
</style>
