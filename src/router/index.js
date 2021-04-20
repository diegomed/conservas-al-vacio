import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/home/Index'
import Login from '../views/home/Login'
import Register from '../views/home/Register'

import Shop from '../views/shop/Index'
import Catalog from '../views/shop/Catalog'
import ProductDetails from '../views/shop/ProductDetails'
import Cart from '../views/shop/Cart'

import Panel from '../views/admin/Index'
import Products from '../views/admin/Products'

import NotFound from '../views/error-pages/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/shop',
    component: Home,
    children: [
      {
        path: '/login',
        name: 'Login',
        component: Login
        // component: () => import(/* webpackChunkName: "home" */ '../views/home/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
        // component: () => import(/* webpackChunkName: "home" */ '../views/home/Register.vue')
      }
    ]
  },
  {
    path: '/shop',
    redirect: '/shop/catalog',
    name: 'Shop',
    component: Shop,
    children: [
      {
        path: 'catalog',
        name: 'Catalog',
        component: Catalog
      },
      {
        path: 'catalog/:id',
        name: 'Details',
        component: ProductDetails
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart
      }
    ]
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/admin',
    redirect: '/admin/products',
    name: 'Admin',
    component: Panel,
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
