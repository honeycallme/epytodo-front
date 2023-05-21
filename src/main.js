import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'

import App from './App.vue'
import Home from './views/home.vue'
import Todos from './views/todos.vue'
import Auth from './views/auth.vue'
import Register from './views/register.vue'

import './index.css'

const routes = [
    { path: '/', component: Home },
    { path: '/todos', component: Todos },
    { path: '/auth', component: Auth },
    { path: '/register', component: Register },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
