import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../views/Customer.vue'
import Product from '../views/Product.vue'
import Report from '../views/Report.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/reports',
      name: 'Report',
      component : Report
    },
    {
      path: '/products',
      name: 'Product',
      component : Product
    },
    {
      path: '/customers',
      name: 'Customer',
      component : Customer
    },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component : About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
