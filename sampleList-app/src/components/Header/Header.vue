<script setup>
import TitleIcon from '../Main/icons/TitleIcon.vue';
import { userDataStore } from '@/stores/userDataStore';
import NotificationIcon from '../Main/icons/NotificationIcon.vue';

const user = userDataStore();

</script>
<template>
  <header className=" container header">
    <div className="header__wrapper">
      <div className="title__toDoList">
        <TitleIcon/>
        <h1 className="title__header">ClarityDesk</h1>
      </div>
      <div className="user_conferences">
        <NotificationIcon/>
        <div className="user_login">{{user.userData.login}}</div>
      </div>
    </div>
  </header>
</template>

<style scoped>

.title__header {
  font-size: 2rem;
  color: rgb(77, 165, 224);
  font-weight: 500;
}

.user_login {
  border: none;
  background: none;
  color: #000000;
  font-size: 1.3rem;
}

.user_conferences {
  display: flex;
  gap: 30px;
  color: #fff;
  font-size: 1.3rem;
  padding-right: 30px;
}

.title__toDoList
{
  display: flex;
  align-items: center;
  padding-left: 20px;
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container {
  width: 100%;
  margin: 0 auto;
}

.title__toDoList
{
  display: flex;
  gap: 10px;
}
</style>
