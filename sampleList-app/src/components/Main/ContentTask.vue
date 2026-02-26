<script setup>
import Card from "./Card.vue";
defineProps({
  task: Array,
});

const emit = defineEmits(['delTask'])

const delTask = (taskid) =>
{
  emit('delTask', taskid)
}

</script>

<template>
  <section class="contentTask">
    <div v-if="task.length <= 0" class="null__task">Список задач пуст</div>
    <TransitionGroup name="list" tag="div" class="taskList__wrapper">
      <Card
        v-for="res in task"
        :key="res.id"
        :taskID="res.id"
        :taskContent="res.content"
        :date="res.date"
        @deletetask="delTask"
      />
    </TransitionGroup>
  </section>
</template>

<style scoped>
.taskList__wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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

.null__task
{
  margin: 0 auto;
  font-size: 2rem;
}
</style>
