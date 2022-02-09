import { createWebHistory, createRouter } from 'vue-router';
import Main from '../views/Main.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('../views/Setup.vue')
  },
  {
    path: '/camera',
    name: 'Camera',
    component: () => import('../views/Camera.vue')
  },
  {
    path: '/puzzle',
    name: 'Puzzle',
    component: () => import('../views/Puzzle.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
