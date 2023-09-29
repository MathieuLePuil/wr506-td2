import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('../views/MoviesView.vue')
    },
    {
      path: '/movies/:id',
      name: 'moviesPage',
      component: () => import('../views/MoviesPageView.vue'),
      props: true
    },
    {
      path: '/actors',
      name: 'actors',
      component: () => import('../views/ActorsView.vue')
    },
    {
      path: '/actors/:id',
      name: 'actorsPage',
      component: () => import('../views/ActorsPageView.vue')
    },
    {
      path: '/categories',
      name: 'categories',
        component: () => import('../views/CategoriesView.vue')
    },
  ]
})

export default router
