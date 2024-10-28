import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SensorView from '../views/SensorView.vue';
import AdminView from '../views/AdminView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/sensor/:id',
    name: 'sensor',
    component: SensorView,
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;