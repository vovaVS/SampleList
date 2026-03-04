<script setup>
import { ref } from "vue";
import axios from "axios";
import { router } from "@/routers/taskRouters";
import { userDataStore } from "@/stores/userDataStore";

const emailText = ref("");
const passwordText = ref("");
const msg = ref("");

const auntificationUser = async () => {

  const userData = userDataStore();

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
    userData.SetUser(result.data.result.user.login);

    localStorage.setItem("token", result.data.result.accessToken);
    msg.value = "";
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="auntificationUser">
    <div class="auntificationUser__wrapper">
      <h1>TODOLIST</h1>
      <input
        class="auntificationUser__input"
        v-model="emailText"
        type="email"
        placeholder="Email"
        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        required
      />
      <div class="error_auntificationUser" v-if="msg.length > 0">{{ msg }}</div>
      <input
        class="auntificationUser__input"
        v-model="passwordText"
        type="password"
        placeholder="Password"
        min="8"
      />
      <div class="error_auntificationUser" v-if="msg.length > 0">{{ msg }}</div>
      <button @click="auntificationUser" class="auntificationUser__button">
        Login
      </button>
    </div>
    <router-link to="/register">Создать аккаунт</router-link>
  </div>
</template>

<style scoped>
.auntificationUser {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 70vh;
}
.auntificationUser__wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
.auntificationUser__input {
  width: 300px;
  height: 30px;
}

.auntificationUser__button {
  width: 300px;
  height: 30px;
}

.error_auntificationUser {
  font-size: 1rem;
  color: red;
}
</style>
