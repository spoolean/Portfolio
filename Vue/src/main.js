import Vue from 'vue'
import Vuex from 'vuex'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/app.scss'

import App from './App.js'
import Store from './store.js'

Vue.use(BootstrapVue);
Vue.use(Vuex);

new Vue({
    store: Store,
    render: (h) => h(App),
}).$mount("#app");