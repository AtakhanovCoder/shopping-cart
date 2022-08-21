import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Cart from '../views/Cart.vue'
import Shop from '../views/Shop.vue'
const routes = [
{
  path: '/',
  name: 'home',
  component: Home,
},  
{
  path: '/shop',
  name: 'shop',
  component: Shop,
},  
{
  path: '/about',
  name: 'about',
  component: About,
},
{
  path: '/contact',
  name: 'contact',
  component: Contact,
},
{
  path: '/cart',
  name: 'cart',
  component: Cart,
},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
