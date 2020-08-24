import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Mariapinto | Home' }
  },
  // redirect when the user visits the following links
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/index',
    redirect: '/'
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
    component: () => import('../views/Catalog.vue')
  },
  {
    path: '/fashion',
    name: 'Fashion',
    meta: { title: 'Mariapinto | Fashion' },
    component: () => import('../views/Fashion.vue')
  },
  {
    path: '/haute_couture',
    name: 'Haute Couture',
    meta: { title: 'Mariapinto | Haute Couture' },
    component: () => import('../views/Haute_Couture.vue')
  },
  {
    path: '/description',
    name: 'Description',
    meta: { title: 'Mariapinto | Description' },
    component: () => import('../views/Description.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: () => import('../views/Error.vue')
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
