import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import registerDirectives from './directives'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(registerDirectives)
    .use(elementPlus)
    .mount('#app')
