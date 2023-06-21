import { createApp } from 'vue'
import './assets/scss/main.scss';
import { createPinia } from 'pinia';
import * as bootstrap from 'bootstrap';

import App from './App.vue'

const pinia = createPinia();
createApp(App).use(pinia).mount('#app')
