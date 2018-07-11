<template>
  <div class="tab-container">
    <!-- <router-link tag="div" class="tab-list" :to="'page'" v-for="(item,index) in tabs" :index="index" :key="item.tabName" >
      <img class="icon-item" v-show="!item.show" :src="item.srcNormal"  alt="">
      <img class="icon-item" v-show="item.show" :src="item.srcActive"  alt="">
      <p class="icon-name">{{item.tabName}}</p>
    </router-link> -->
    <router-link tag="div" class="tab-list" to="/home" id="home" @click.native="select($event)"  >
      <img class="icon-item" v-show="!items[0].home" src="~images/HomeNormal.png"  alt="">
      <img class="icon-item" v-show="items[0].home" src="~images/HomeActive.png"  alt="">
      <p class="icon-name">主页</p>
    </router-link>
    <router-link tag="div" class="tab-list" to="/rank" id="rank" @click.native="select($event)">
      <img v-show="!items[1].rank" class="icon-item" src="~images/CupNormal.png"  alt="">
      <img v-show="items[1].rank" class="icon-item" src="~images/CupActive.png"  alt="">
      <p class="icon-name">排名</p>
    </router-link>
    <router-link tag="div" class="tab-list" to="/train" id="train" @click.native="select($event)">
        <img v-show="!items[2].train" class="icon-item" src="~images/FitnessNormal.png"  alt="">
        <img v-show="items[2].train" class="icon-item" src="~images/FitnessActive.png"  alt="">
        <p class="icon-name">训练</p>
    </router-link>
    <router-link tag="div" class="tab-list" to="/my" id="my" @click.native="select($event)">
        <img v-show="!items[3].my" class="icon-item" src="~images/MyNormal.png" alt="">
        <img v-show="items[3].my" class="icon-item" src="~images/MyActive.png" alt="">
        <p class="icon-name">我</p>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {home: true},
        {rank: false},
        {train: false},
        {my: false}
      ]
    }
  },
  methods: {
    select: function (e) {
      var selectItem = e.currentTarget.id
      this.items[0].selectItem = true
      if (selectItem === 'home') {
        this.items[0].home = true
        this.items[1].rank = false
        this.items[2].train = false
        this.items[3].my = false
      } else if (selectItem === 'rank') {
        this.items[0].home = false
        this.items[1].rank = true
        this.items[2].train = false
        this.items[3].my = false
      } else if (selectItem === 'train') {
        this.items[0].home = false
        this.items[1].rank = false
        this.items[2].train = true
        this.items[3].my = false
      } else if (selectItem === 'my') {
        this.items[0].home = false
        this.items[1].rank = false
        this.items[2].train = false
        this.items[3].my = true
      }
      // for(var i=0;i<this.select.length;i++){
      //   alert(this.select)
      // }
    }
  }
}
</script>
<style lang="stylus" scoped>
  .tab-container
    display: flex
    flex-direction: row
    position: fixed
    z-index: 9
    bottom: 0
    left: 0
    right: 0
    width: 100%
    overflow: hidden
    height: 50px
    background: #fff
    &:before
      content: ''
      position: absolute
      left: 0
      top: 0
      right: 0
      height: 1px
      background: #e4e4e4
      transform: scaleY(0.5)
  .tab-list
    flex: 1
    text-align: center
    // margin 0 auto
    .icon-item
      width: 0.5rem
      heigth: 0.5rem
      padding-top: 0.1rem
    .icon-name
      margin-top: 0.05rem
  &.router-link-active
    .icon-name
      margin-top: 0.05rem
      color: #0EA3FF
</style>