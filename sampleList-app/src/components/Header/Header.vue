<script setup>
import TitleIcon from '../Main/icons/titleIcon.vue';

</script>

<template>
  <header className=" container header">
    <div className="header__wrapper">
      <div className="title__toDoList">
        <TitleIcon/>
        <h1 className="title__header">TODOCLOUD</h1>
      </div>
      <div className="user_conferences">
        <button className="user_button">Vova Chernov</button>
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
