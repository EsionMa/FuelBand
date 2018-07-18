import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import My from '../pages/my/My'
import Rank from '../pages/rank/Rank'
import Train from '../pages/train/Train'
import HomeTopic from '../pages/home-topic/Home-topic'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'hometopic',
          component: HomeTopic
        }
      ]
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/train',
      component: Train
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
