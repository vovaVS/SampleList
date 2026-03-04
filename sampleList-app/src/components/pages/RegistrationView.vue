<script setup>
import { ref } from "vue";
import axios from "axios";
import { router } from "@/routers/taskRouters";
import { userDataStore } from "@/stores/userDataStore";


const loginText = ref("");
const emailText = ref("");
const passwordText = ref("");

const msgErrormail = ref("")
const msgPassword = ref("")
const msgLogin = ref("")
const userData = userDataStore();

const regUser =  async () => {
  try {
    const result =  await axios.post("http://localhost:3000/register", {login: loginText.value, email: emailText.value, password: passwordText.value})
    if(result.data.code === "error")
    {
      msgErrormail.value = result.data.errors.emailError;
      msgPassword.value = result.data.errors.passwordError;
      msgLogin.value = result.data.errors.loginError;
      passwordText.value = "";
    }
    else
    {
      userData.SetUser(result.data.result.user.login);
      localStorage.setItem("token", result.data.result.accessToken);
      router.push("/");
    }
    console.log(result.data)
    return result
    
  } catch (error) {
    console.log(error)
  }
};
</script>

<template>
  <div class="register">
    <div class="register__wrapper">
      <h1>TODOLIST</h1>
      <input
        class="register__input"
        value="loginText"
        v-model="loginText"
        type="text"
        min="4"
        placeholder="Login"
      />
       <div class="error_auntificationUser" v-if="msgLogin !== '' ">{{  msgLogin }}</div>
      <input
        class="register__input"
        v-model="emailText"
        type="email"
        placeholder="Email"
      />
      <div class="error_auntificationUser" v-if="msgErrormail !== ''">{{  msgErrormail }}</div>
      <input
        class="register__input"
        v-model="passwordText"
        type="password"
        placeholder="Password"
        min="8"
      />
      <div class="error_auntificationUser" v-if="msgPassword !== ''">{{ msgPassword }}</div>
      <input
        class="register__input"
        v-model="passwordText"
        type="password"
        placeholder="Repeat password"
        min="8"
      />
      <div class="error_auntificationUser" v-if="msgPassword !== ''">{{ msgPassword }}</div>
      <button @click="regUser" 
      class="register__button">Register</button>
    </div>
    <router-link to="/auth">Авторизация</router-link>
  </div>
</template>

<style scoped>
.register
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 70vh;
}
.register__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.register__input {
  width: 300px;
  height: 30px;
}

.register__button {
  width: 300px;
  height: 30px;
}
</style>
