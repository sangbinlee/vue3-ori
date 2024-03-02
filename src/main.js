import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import YouTube from 'vue3-youtube'



const app = createApp(App)

app.component('YouTube', YouTube)

app.use(createPinia())
app.use(router)

app.mount('#app')
