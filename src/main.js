import { createApp } from 'vue'
import './assets/scss/main.scss';
import { createPinia } from 'pinia';
import * as bootstrap from 'bootstrap';

import App from './App.vue'
const app = createApp(App)
const pinia = createPinia();
app.use(pinia);
createApp(App).mount('#app')
