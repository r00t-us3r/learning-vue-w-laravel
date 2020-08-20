import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from './pages/Auth.vue'
import Home from './pages/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [
        {
            path: '/auth',
            name: 'auth',
            component: Auth
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
    ]
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')

    if (to.matched.some(record => record.meta.auth) && !loggedIn) {
        next('/auth')
        return
    }
    next()
})

export default router
