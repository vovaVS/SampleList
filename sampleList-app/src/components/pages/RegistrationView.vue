<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { router } from "@/routers/taskRouters";
import { userDataStore } from "@/stores/userDataStore";
import { ENTERED } from "react-transition-group/Transition";
import EmailInputIcon from "../Main/icons/EmailInputIcon.vue";


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
      userData.SetUser({login: result.data.result.user.login, id: result.data.result.user.ID});
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
  <div class="rigister_class">
  <div class="register">
     <h1>РЕГИСТРАЦИЯ</h1>
    <div class="register__wrapper">
      <input
        class="register__input"
        value="loginText"
        v-model="loginText"
        type="text"
        min="4"
        placeholder="Login"
      />
       <div class="error_registerUser" v-if="msgLogin !== '' ">{{  msgLogin }}</div>
      <input
        class="register__input"
        v-model="emailText"
        type="email"
        placeholder="Email"
      />
      <div class="error_registerUser" v-if="msgErrormail !== ''">{{  msgErrormail }}</div>
      <input
        class="register__input"
        v-model="passwordText"
        type="password"
        placeholder="Password"
        min="8"
      />
      <div class="error_registerUser" v-if="msgPassword !== ''">{{ msgPassword }}</div>
      <input
        class="register__input"
        v-model="passwordText"
        type="password"
        placeholder="Repeat password"
        min="8"
      />
      <div class="error_registerUser" v-if="msgPassword !== ''">{{ msgPassword }}</div>
      <button @click="regUser" 
      class="register__button">Отправить</button>
    </div>
    <router-link to="/auth">Авторизация</router-link>
  </div>
  </div>
</template>

<style scoped>

.register
{
  display: flex;
  background-color: aliceblue;
  max-width: 580px;
  width: 100%;
  min-height: 426px;
  align-items: center;
  flex-direction: column;
  border-radius: 5%;
  box-shadow: 0px 10px 15px 11px rgba(0,0,0,0.1);
  padding-bottom: 30px;
  
}
.register__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  align-items: center;
}
.register__input {
  width: 400px;
  height: 40px;
  border-radius: 10px;
  border: none;
}

.register__button {
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

.rigister_class
{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 90vh;
}

.error_registerUser
{
  font-size: 1rem;
  color: red;
}
</style>
