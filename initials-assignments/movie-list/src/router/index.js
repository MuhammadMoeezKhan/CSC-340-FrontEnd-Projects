import { createRouter, createWebHistory } from 'vue-router'
import MovieListView from '@/views/MovieListView.vue';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/movies',
      name: 'MovieListView',
      component: MovieListView,
    },
    {
      path: '/about',
      name: 'AboutView',
      component: AboutView,
    },
  ]
})

export default router