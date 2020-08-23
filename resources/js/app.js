require ('./bootstrap');

import Vue from 'vue';
import store from './store';
import route from './router';

window.state = store.state;

Vue.conponent('app', require('./components/App.vue'));

const app = new Vue ({
    router
}).$mount('#app');