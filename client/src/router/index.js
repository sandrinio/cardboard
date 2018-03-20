import Vue from 'vue'
import Router from 'vue-router'
import Auth_Guard from './Auth_Guard'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Clients from '@/components/clients/Clients'
import NewProduct from '@/components/clients/New'
import ProductShow from '@/components/clients/Show'
import Orders from '@/components/orders/index'
import NewOrder from '@/components/orders/New'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      beforeEnter: Auth_Guard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: Auth_Guard
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients,
      beforeEnter: Auth_Guard
    },
    {
      path: '/clients/product-show/:id',
      name: 'productShow',
      props: true,
      component: ProductShow,
      beforeEnter: Auth_Guard
    },
    {
      path: '/clients/:id/new-product',
      name: 'newProduct',
      props: true,
      component: NewProduct,
      beforeEnter: Auth_Guard
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders,
      beforeEnter: Auth_Guard
    },
    {
      path: '/orders/new',
      name: 'newOrder',
      component: NewOrder,
      beforeEnter: Auth_Guard
    }
  ]
})
