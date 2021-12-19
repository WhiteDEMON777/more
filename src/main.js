import '@vueform/multiselect/themes/default.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import VCalendar from 'v-calendar'
import '@/assets/scss/base.scss'

const app = createApp(App)
app.use(VCalendar, {})

app.use(router)

app.mount('#app')
