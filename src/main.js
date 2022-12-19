import { createApp } from 'vue'
import '@/style.css'
import App from './App.vue'
import { router } from './router/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHouse,faFilm,faBoltLightning,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

library.add(faHouse,faFilm,faBoltLightning,faMagnifyingGlass)

const app = createApp(App);
app.component('font-awesome-icon',FontAwesomeIcon)
app.use(router)
app.mount('#app')
