import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import Vue from "vue";
import App from "./App.js";
import Vuex from "vuex";
import Store from "./Store.js";

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const store = new Vuex.Store(Store);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
