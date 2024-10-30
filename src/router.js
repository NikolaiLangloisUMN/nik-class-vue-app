import {createRouter, createWebHistory} from 'vue-router'
import Home from "./components/Home.vue";
import AllStudents from "./components/students/AllStudents.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes go here
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/students/all',
            name: 'AllStudents',
            component: AllStudents
        }
    ]
})

export default router