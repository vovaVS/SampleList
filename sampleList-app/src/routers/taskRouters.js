import { createRouter } from "vue-router";
import MainView from "../components/pages/MainView.vue"
import LoginView from "../components/pages/LoginView.vue"
import RegistrationView from "../components/pages/RegistrationView.vue"
import { createWebHistory } from "vue-router";

const routes = [
{
    path: '/',
    component: MainView
},
{
    path: '/auth',
    component: LoginView
},
{
    path: "/register",
    component: RegistrationView
}
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  console.log('Переход на:', to.path, 'Токен:', token)
  if (to.path === '/register') {
    return next()
  }
  if (token) {
    if (to.path === '/auth') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path !== '/auth') {
      next('/auth')
    } else {
      next()
    }
  }
})