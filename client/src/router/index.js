import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Clients from '@/components/clients/Clients'
import NewProduct from '@/components/clients/New'
import ProductShow from '@/components/clients/Show'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/clients/product-show/:id',
      name: 'productShow',
      props: true,
      component: ProductShow
    },
    {
      path: '/clients/:id/new-product',
      name: 'newProduct',
      props: true,
      component: NewProduct
    }
  ]
})
