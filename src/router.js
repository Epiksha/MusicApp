import Vue from 'vue';
import Router from 'vue-router';

import Home from './vue/routes/Home/Home.vue';
import Contact from './vue/routes/Contact/Contact.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});