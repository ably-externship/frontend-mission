import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
axios.defaults.baseURL = 'https://virtserver.swaggerhub.com/lkaybob/projectlion-vue/1.0.0';
axios.defaults.headers.common.Authorization = 'abcd1234';
axios.defaults.headers.get.Accepts = 'application/json';
