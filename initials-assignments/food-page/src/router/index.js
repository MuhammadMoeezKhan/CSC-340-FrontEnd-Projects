import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RecipePage from '../views/RecipePage.vue';
import CookingNotesPage from '../views/CookingNotesPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: RecipePage,
  },
  {
    path: '/cooking-notes',
    name: 'cooking-notes',
    component: CookingNotesPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;