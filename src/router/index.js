import Vue from 'vue'
import Router from 'vue-router'

const register = () => import('../components/register');
const profile = () => import('../components/profile');
const home = () => import('../components/home')
const head = () => import('../components/head')
const body = () => import('../components/body')
const footer = () => import('../components/footer')
const login = () => import('../components/login')
const sider = () => import('../components/sider')
const timeline = () => import('../components/timeline')
const editor = () => import('../components/editor')
const articlesList = () => import('../components/articlesList')
const article = () => import('../components/article')
const welcome = () => import('../views/welcome')
const index = () => import('../views/index')


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/head'
    },
    {
      path: '/head',
      component: head
    },
    {
      path: '/welcome',
      component: welcome,
      children: [
        {
          path:'',
          component: login
        },
        {
          path: 'register',
          component: register
        },
        {
          path: 'login',
          component: login
        }
      ]
    },
    {
      path: '/index',
      component: index,
      children: [
        {
          path: 'home',
          component: home
        },
        {
          path: 'articlesList',
          component: articlesList
        }
      ]
    },
    {
      path: '/article',
      component: article
    },
    {
      path: '/editor',
      component: editor
    },
    {
      path: '/timeline',
      component: timeline
    }
    // {
    //   path: '/sider',
    //   component: sider
    // },
    // {
    //   path: '/profile',
    //   component: profile
    // }
  ],
  linkActiveClass: 'active'
})

export default router
