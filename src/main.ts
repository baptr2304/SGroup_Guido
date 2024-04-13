import { createApp } from 'vue'
import './style.css'
import Root from './Root.vue'
import router from './router'
import './assets/main.scss'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(Root)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router);
app.use(ElementPlus)
router.isReady().then(() => app.mount('#root')
)

