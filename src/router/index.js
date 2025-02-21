import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import AboutApp from '@/views/AboutApp.vue'
import ContactsApp from '@/views/ContactsApp.vue'
import HomePage from '@/views/HomePage.vue'

import CatalogMaterialePage from '@/views/pages/catalog/CatalogMaterialePage.vue'
import ConfiguratorMain from '@/views/pages/ConfiguratorMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/vue_examples/AboutView.vue'),
    },
    {
      path: '/aboutapp',
      name: 'aboutapp',
      component: AboutApp,
    },
    {
      path: '/contactsapp',
      name: 'contactsapp',
      component: ContactsApp,
    },
    {
      path: '/CatalogMaterialePage',
      name: 'CatalogMaterialePage',
      component: CatalogMaterialePage,
    },
    {
      path: '/ConfiguratorMain',
      name: 'ConfiguratorMain',
      component: ConfiguratorMain,
    }
  ],
})

export default router
