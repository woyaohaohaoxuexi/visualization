import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router/index';
import './style/index.scss';

const app = createApp(App)
app.use(router)
app.use(ElementPlus);
app.mount('#app');
