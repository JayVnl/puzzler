import { createWebHashHistory, createRouter } from 'vue-router';
import Main from '../views/Main.vue';
import Guide from '../views/Guide.vue';
import Setup from '../views/Setup.vue';
import Camera from '../views/Camera.vue';
import Puzzle from '../views/Puzzle.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Guide
  },
  {
    path: '/setup',
    name: 'Setup',
    component: Setup
  },
  {
    path: '/camera',
    name: 'Camera',
    component: Camera
  },
  {
    path: '/puzzle',
    name: 'Puzzle',
    component: Puzzle
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
