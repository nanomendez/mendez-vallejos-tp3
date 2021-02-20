import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Rooms from '../views/Rooms'
import Employees from '../views/Employees'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, 
    {
        path: '/rooms',
        name: 'Rooms',
        component: Rooms
    }, 
    {
        path: '/employees',
        name: 'Employees',
        component: Employees
    },
]

const router = new VueRouter({
    routes
})

export default router