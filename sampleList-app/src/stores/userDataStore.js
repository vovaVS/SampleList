import { defineStore } from "pinia";
import { ref } from "vue";

export const userDataStore = defineStore("userData", ()=> {
  const userData = ref(null)

  const SetUser = (user) =>
  {
    userData.value = user;
  }
  return {userData, SetUser}
},

{
  persist: true
}

);
