import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/components/Login'
import DashboardRouter from '@/router/DashboardRouter'

Vue.use(VueRouter)

const ifAuthenticated = (to, from, next) =>
{
  const user_auth = localStorage.getItem('user-token');
  if (user_auth !== null && user_auth)
  {
    next();
    return
  }
  next('/login')

};


const routes = [
  {
    path: '/login', name: 'login', component: Login
  },
  {
    path        : '/',
    name        : 'App',
    component   : Home,
    beforeEnter : ifAuthenticated,
    children:
    [
      DashboardRouter,
    ]

  },

];

export default new VueRouter({
  hash: '#',
  //mode: 'history',
  routes
})

