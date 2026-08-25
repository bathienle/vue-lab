import { createRouter, createWebHistory } from 'vue-router';

import DashboardView from '@/views/DashboardView.vue';

declare module 'vue-router' {
  interface RouteMeta {
    bare?: boolean;
  }
}

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
