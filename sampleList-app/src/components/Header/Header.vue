<script setup>
import { router } from '@/routers/taskRouters';
import TitleIcon from '../Main/icons/titleIcon.vue';
import { jwtDecode } from "jwt-decode";
import { userDataStore } from '@/stores/userDataStore';

const user = userDataStore();

const unLogin = () =>
{
  localStorage.removeItem('token');
  router.push('/auth');
}
</script>
<template>
  <header className=" container header">
    <div className="header__wrapper">
      <div className="title__toDoList">
        <TitleIcon/>
        <h1 className="title__header">TODOCLOUD</h1>
      </div>
      <div className="user_conferences">
        <button className="user_button">{{user.userData}}</button>
        <button @click="unLogin">Выход</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #4b4e54;
}

.title__header {
  font-size: 2rem;
  color: azure;
  font-weight: 500;
}

.user_button {
  border: none;
  background: none;
  color: #fff;
  font-size: 1.3rem;
}

.user_conferences {
  display: flex;
  gap: 30px;
  color: #fff;
  font-size: 1.3rem;
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
}

.container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
}

.title__toDoList
{
  display: flex;
  gap: 10px;
}
</style>
