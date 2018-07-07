import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import My from '../pages/my/My'
import Rank from '../pages/rank/Rank'
import Train from '../pages/train/Train'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'My',
      component: My
    },
    {
      path: '/',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/',
      name: 'Train',
      component: Train
    },
    {
      path: '/Index',
      redirect: '/'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
