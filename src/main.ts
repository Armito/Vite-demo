import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { registerDirectives } from './directives'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)
app.use(router)

const pinia = createPinia()
app.use(pinia)

app.use(elementPlus)

registerDirectives(app)

app.mount('#app')
