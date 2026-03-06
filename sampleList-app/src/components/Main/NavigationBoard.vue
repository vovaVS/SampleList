<script setup lang="ts">
import { router } from '@/routers/taskRouters';
import UsersNavIcon from './icons/UsersNavIcon.vue';
import PaymentIcon from './icons/PaymentIcon.vue';
import PanelIcon from './icons/PanelIcon.vue';


const unLogin = () =>
{
  localStorage.removeItem('token');
  router.push('/auth');
}
</script>

<template>
  <div class="navigationBoard">
    <div class="navigationBoard__wrapper">
      <div class="navigation_list">
        <div class="nav_btn"><PanelIcon/> My Dasboard</div>
        <div class="nav_btn"><UsersNavIcon/>Friends</div>
        <div class="nav_btn">Notification</div>
        <div class="nav_btn">Company dasboard</div>
        <button @click="unLogin">Выход</button>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
.navigationBoard {
  width: 250px;
  height: 500px;
  margin-top: 50px;
}
.navigationBoard__wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
}

.nav_btn
{
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #9c9ea0;
    gap: 5px;

}
</style>
