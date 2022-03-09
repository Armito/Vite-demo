import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import registerDirectives from './directives'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

app.use(router)

app.use(createPinia())

app.use(registerDirectives)

app.use(elementPlus)

app.mount('#app')
