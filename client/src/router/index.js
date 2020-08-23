import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalog from  '../views/Catalog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Mariapinto | Home' }
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'Mariapinto | About' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/account',
    name: 'Account',
    meta: { title: 'Mariapinto | Account' },
    component: () => import('../views/Account.vue')
  },
  {
    path: '/catalog/:product_name',
    name: 'Catalog',
    meta: { title: 'Mariapinto | Catalog' },
    component: Catalog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router
