import Vue from 'vue';
import Router from 'vue-router';

import Home from './routes/Home/Home.vue';
import Register from './routes/Register/Register.vue';
import Login from './routes/Login/Login.vue';
import Songs from './routes/Songs/Songs.vue';
import CreateSong from './routes/CreateSong/CreateSong.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/songs',
            component: Songs,
        },
        {
            path: '/create',
            component: CreateSong,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
    ],
});
