<script setup>
import ContentTask from "../Main/ContentTask.vue";
import InputTask from "../Main//InputTask.vue";
import HeaderView from "../Header/Header.vue";
import { onMounted, ref} from "vue";
import axios from "axios";
import { userDataStore } from "@/stores/userDataStore";
import NavigationBoard from "../Main/NavigationBoard.vue";

</script>
<template>
  <HeaderView />
  <main class="main">
    <div class="main_wrapper">
      <NavigationBoard/>
      <ContentTask/>
    </div>
  </main>
</template>

<style scoped>
.main_wrapper {
  display: flex;
  min-height: 90vh;
}

.container {
  width: 100%;
  margin: 0 auto;
}
</style>
