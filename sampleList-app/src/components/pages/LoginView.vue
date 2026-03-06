<script setup>
import { ref } from "vue";
import axios from "axios";
import { router } from "@/routers/taskRouters";
import { userDataStore } from "@/stores/userDataStore";

const emailText = ref("");
const passwordText = ref("");
const msg = ref("");
const userData = userDataStore();

const auntificationUser = async () => {

  try {
    const result = await axios.post("http://localhost:3000/auth", {
      email: emailText.value,
      password: passwordText.value,
    });

    if (result.data.code === "error") {
      msg.value = result.data.result;
      emailText.value = "";
      passwordText.value = "";
      return; 
    }
    userData.SetUser({login: result.data.result.user.login, id: result.data.result.user.ID});
    
    localStorage.setItem("token", result.data.result.accessToken);
    msg.value = "";
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="autificationUserClass">
  <div class="auntificationUser">
    <div class="auntificationUser__wrapper">
      <h1>АВТОРИЗАЦИЯ</h1>
      <input
        class="auntificationUser__input"
        v-model="emailText"
        type="email"
        placeholder="Email"
      />
      <div class="error_auntificationUser" v-if="msg.length > 0">{{ msg }}</div>
      <input
        class="auntificationUser__input"
        v-model="passwordText"
        type="password"
        placeholder="Password"
      />
      <div class="error_auntificationUser" v-if="msg.length > 0">{{ msg }}</div>
      <button @click="auntificationUser" class="auntificationUser__button">
        Войти
      </button>
    </div>
    <router-link to="/register">Создать аккаунт</router-link>
  </div>
  </div>
</template>
<style scoped>

.autificationUserClass
{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 90vh;
}
.auntificationUser {
  display: flex;
  background-color: aliceblue;
  max-width: 580px;
  width: 100%;
  min-height: 326px;
  align-items: center;
  flex-direction: column;
  border-radius: 5%;
  box-shadow: 0px 10px 15px 11px rgba(0,0,0,0.1);
  padding-bottom: 30px;
}
.auntificationUser__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
}
.auntificationUser__input {
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: none;
}

.auntificationUser__button {
  width: 300px;
  height: 50px;
  -webkit-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  -moz-box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  box-shadow: 3px 6px 24px 2px rgba(66, 68, 90, 0.36);
  background-color: #5b9fd6;
  border-radius: 30px;
  outline: none;
  border: none;
  font-size: 1rem;
  color: #ffff;
}

.error_auntificationUser {
  font-size: 1rem;
  color: red;
}
</style>
