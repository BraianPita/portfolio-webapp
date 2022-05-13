import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import PortfolioPost from '../views/PortfolioPost.vue'
import ContactView from '../views/ContactView.vue'
import EditorView from '../views/EditorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/feed',
    name: 'feed',
    component: PortfolioView
  }, {
    path: '/post/:id',
    name: 'post',
    props: true,
    component: PortfolioPost
  }, {
    path: '/contact',
    name: 'contact',
    props: true,
    component: ContactView
  }, {
    path: '/editor/:id',
    name: 'editor',
    props: true,
    component: EditorView
  }
]
})

export default router



