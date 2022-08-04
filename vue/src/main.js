import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import Store from './Store.js'

const store = createStore(Store);

createApp(App)
    .use(store)
    .mount('#app');
