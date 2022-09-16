import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/LoginPage'
import SignupPage from '@/views/SignupPage'
import DashboardPage from '@/views/DashboardPage'
import HomePage from '@/views/HomePage'

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)

const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const isAuthenticated = firebase.auth().currentUser;
    if (requiresAuth && !isAuthenticated) {
        next("/")
    } else {
        next()
    }
}
)

export default router