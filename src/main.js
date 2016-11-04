import Vue from 'vue';
import VueRouter from 'vue-router';
import VueFire from 'vuefire';

import Home from './pages/Home.vue';

Vue.use(VueRouter);
Vue.use(VueFire);

// Array of routes for router instance
const routes = [
  {
    path: '/',
    name: 'homeRoute',
    component: Home
  }
]

// instantiation of router using predefined routes array
const router = new VueRouter({
  mode: 'history',
  routes
});

// instantiation of main vue component utilizing router
const app = new Vue({
  router
}).$mount('#app');
