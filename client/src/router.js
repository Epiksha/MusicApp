import Vue from 'vue';
import Router from 'vue-router';

import Register from './routes/Register/Register.vue';
import Login from './routes/Login/Login.vue';
import Songs from './routes/Songs/Songs.vue';
import CreateSong from './routes/CreateSong/CreateSong.vue';
import ViewSong from './routes/ViewSong/ViewSong.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/songs',
        },
        {
            path: '/songs',
            component: Songs,
        },
        {
            path: '/songs/:id',
            component: ViewSong,
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
