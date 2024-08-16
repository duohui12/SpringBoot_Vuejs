import { createApp } from 'vue'
import App from './App.vue'
import router from './router'; // ./router/index.js => index.js 생략가능 

createApp(App).use(router).mount('#app')
