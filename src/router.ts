import { createRouter, createWebHistory } from 'vue-router'
// import loginVue from './pages/auth/login.vue'
// import indexVue from './pages/index.vue'
import routes from '~pages'// vite-plugin-pages
const router = createRouter({
    history: createWebHistory(),
    routes
    // routes: [
    //     {
    //         path: '/',
    //         component: indexVue
    //     },

    //     {
    //         path: '/login',
    //         component: loginVue
    //     },

    // ]
})

// window.history.pushState()

export default router