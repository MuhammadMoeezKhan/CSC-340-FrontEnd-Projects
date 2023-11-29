import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useRiddleStore } from './stores/riddleStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const pinia = createPinia()
app.use(pinia)
pinia.use(useRiddleStore)

app.mount('#app')