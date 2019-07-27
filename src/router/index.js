import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import service from '@/components/service'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
      
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
