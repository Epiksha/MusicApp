import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App/App.vue';
import router from './router';

import store from './store/store';
import './scss/general.scss';

sync(store, router);

new Vue({
    render: (createEl) => createEl(App),
    router,
    store,
}).$mount('#root');
