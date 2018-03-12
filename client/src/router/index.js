import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Clients from '@/components/clients/Clients'
import NewCompany from '@/components/clients/New'

Vue.use(Router)

export default new Router({
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
      path: '/clients/:id/new-product',
      name: 'newCompany',
      props: true,
      component: NewCompany
    }
  ]
})
