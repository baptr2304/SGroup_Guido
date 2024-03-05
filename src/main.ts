import { createApp } from 'vue'
import './style.css'
import Root from './Root.vue'
import Router from './router'

const app = createApp(Root);
app.use(Router);
app.mount("#root");
