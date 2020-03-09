import Vue from 'vue';
import Router from 'vue-router';

import Home from './routes/Home/Home.vue';
import Register from './routes/Register/Register.vue';
import Login from './routes/Login/Login.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
    ],
});
