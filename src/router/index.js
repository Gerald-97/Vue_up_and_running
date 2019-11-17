import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ChapterTwo from '../views/Chapter_2.vue'
import ChapterFive from '../views/Chapter_5.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chapter_1',
    name: 'Chapter_1',
    component: () => import('../views/Chapter_1.vue')
  },
  {
    path: '/chapter_2',
    name: 'Chapter_2',
    component: ChapterTwo
  },
  {
    path: '/chapter_3',
    name: 'Chapter_3',
    component: () => import('../views/Chapter_3.vue')
  },
  {
    path: '/chapter_4',
    name: 'Chapter_4',
    component: () => import('../views/Chapter_4.vue')
  },
  {
    path: '/chapter_5',
    component: ChapterFive,
    children: [
      {
        path: 'profile_settings',
        name: 'ProfileSettings',
        component: () => import('../components/PageProfile.vue')
      },
      {
        path: 'site_settings',
        name: 'SiteSettings',
        component: () => import('../components/PageSettings.vue')
      }
    ]
  },
  {
    path: '/chapter_6',
    name: 'Chapter_6',
    component: () => import('../views/Chapter_6.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
