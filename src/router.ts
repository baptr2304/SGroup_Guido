import { createRouter, createWebHistory } from 'vue-router'
import loginVue from './pages/auth/login.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/',
        component: loginVue },

        {path:'/login',
        component: loginVue},

    ]
})

// window.history.pushState()

export default router