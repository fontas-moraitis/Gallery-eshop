import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About')
  },
  {
    path: '/shop',
    name: 'Collection',
    component: () => import(/* webpackChunkName: "Collection" */ '../views/Collection')
  },
  {
    path: '/shop/:id',
    name: 'ItemDetails',
    props: true,
    component: () => import(/* webpackChunkName: "ItemDetails" */ '../views/ItemDetails')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart')

  },
  {
    path: '/404',
    alias: '*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
