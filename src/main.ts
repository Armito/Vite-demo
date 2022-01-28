import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { registerDirectives } from './directives'

const app = createApp(App)
app.use(router)
const pinia = createPinia()
app.use(pinia)
registerDirectives(app)
app.mount('#app')
