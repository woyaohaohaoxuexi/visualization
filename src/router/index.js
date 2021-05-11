import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '@/views/login/index.vue';

// console.log('login', Login);
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// router.beforeEach();

export default router;
