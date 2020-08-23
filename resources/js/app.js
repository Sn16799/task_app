require('./bootstrap');
import  Vue from 'vue';
import router from './store/index';

Vue.component('app', require('./components/App.vue'));

const app = new Vue({
    store,
    router
}).$mount('#app');
