<template>
  <div id="app">
    <router-view></router-view>
    <m-tabbar v-model="select">
      <m-tabbar-item id='Home' isRouter>
        <img src="./assets/images/HomeNormal.png" alt="" slot="icon-normal">
        <img src="./assets/images/HomeActive.png" alt="" slot="icon-active">
        主页
      </m-tabbar-item>
      <m-tabbar-item id='Rank' isRouter>
        <img src="./assets/images/CupNormal.png" alt="" slot="icon-normal">
        <img src="./assets/images/CupActive.png" alt="" slot="icon-active">
        排名
      </m-tabbar-item>
      <m-tabbar-item id='Train' isRouter>
        <img src="./assets/images/FitnessNormal.png" alt="" slot="icon-normal">
        <img src="./assets/images/FitnessActive.png" alt="" slot="icon-active">
        训练
      </m-tabbar-item>
       <m-tabbar-item id='My' isRouter>
        <img src="./assets/images/MyNormal.png" alt="" slot="icon-normal">
        <img src="./assets/images/MyActive.png" alt="" slot="icon-active">
        我
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
import mTabbar from './components/common/tabbar'
import mTabbarItem from './components/common/tabbar-item'
export default {
  name: 'app',
  components: {
    mTabbar,
    mTabbarItem
  },
  data () {
    return {
      select: 'Home'
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
