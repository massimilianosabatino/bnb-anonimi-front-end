import { createApp } from 'vue'
import './assets/scss/main.scss';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faUser,faBars,faInstagram,faTwitter,faFacebook)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
