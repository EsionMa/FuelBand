<template>
  <div class="container">
    <div class="rank-header" style="height:5.5rem">
      <p class="ranking-name">排名</p>
      <div class="img-div">
        <img class="user-icon" src="~images/SomeUser.png" alt="">
      </div>
      <p class="top-guy">Admin占据了封面！</p>
    </div>
    <div style="width:100%;height:.2rem;background-color:#F9F9F9"></div>
    <div class="rank-body">
      <div class="head-portrait" style="margin:.2rem 0 0 0.5rem">
        <img class="user-img" src="~images/SomeUser.png" alt="">
      </div>
      <div class="user-info" style="">
        <div style="float:left;margin:0.4rem 0 0 .2rem;">
          <span style="font-size:.3rem;color:#000;">Admin</span>
        </div>
        <div style="margin:0.4rem 0 0 3.7rem">
          <span class="count" style="" >64284</span>
        </div>
        <div style="float:right;width:0.5rem;margin:-.7rem -.6rem 0 0">
          <img src="~images/praise.png" alt="" style="width:.4rem;padding-left:.1rem">
          <div style="text-align:center;margin-top:.1rem"><span style="color:#ADADAD">100</span></div>
        </div>
      </div>
    </div>
    <div style="width:100%;height:.2rem;background-color:#F9F9F9"></div>
    <div class="rank-body">
      <div style="margin:.5rem 0 0 .1rem;"><span style="color:#ADADAD">1</span></div>
      <div class="head-portrait" style="margin:.2rem 0 0 0.2rem">
        <img class="user-img" src="~images/SomeUser.png" alt="">
      </div>
      <div class="user-info" style="">
        <div style="float:left;margin:0.4rem 0 0 .2rem;">
          <span style="font-size:.3rem;color:#000;">kkk</span>
        </div>
        <div style="margin:0.4rem 0 0 3.7rem">
          <span class="count" style="" >50000</span>
        </div>
        <div style="float:right;width:0.5rem;margin:-.7rem -.6rem 0 0">
          <img src="~images/praise.png" alt="" style="width:.4rem;padding-left:.1rem">
          <div style="text-align:center;margin-top:.1rem"><span style="color:#ADADAD">32</span></div>
        </div>
      </div>
    </div>
    <div style="border-bottom:1px solid #F9F9F9;width:75%;margin-left:1.6rem"></div>
    <div class="rank-body">
      <div style="margin:.5rem 0 0 .1rem;"><span style="color:#ADADAD">2</span></div>
      <div class="head-portrait" style="margin:.2rem 0 0 0.2rem">
        <img class="user-img" src="~images/SomeUser.png" alt="">
      </div>
      <div class="user-info" style="">
        <div style="float:left;margin:0.4rem 0 0 .2rem;">
          <span style="font-size:.3rem;color:#000;">bbb</span>
        </div>
        <div style="margin:0.4rem 0 0 3.7rem">
          <span class="count" style="" >42512</span>
        </div>
        <div style="float:right;width:0.5rem;margin:-.7rem -.6rem 0 0">
          <img src="~images/praise.png" alt="" style="width:.4rem;padding-left:.1rem">
          <div style="text-align:center;margin-top:.1rem"><span style="color:#ADADAD">3</span></div>
        </div>
      </div>
    </div>
    <div style="border-bottom:1px solid #F9F9F9;width:75%;margin-left:1.6rem"></div>
    <div class="rank-body">
      <div style="margin:.5rem 0 0 .1rem;"><span style="color:#ADADAD">3</span></div>
      <div class="head-portrait" style="margin:.2rem 0 0 0.2rem">
        <img class="user-img" src="~images/SomeUser.png" alt="">
      </div>
      <div class="user-info" style="">
        <div style="float:left;margin:0.4rem 0 0 .2rem;">
          <span style="font-size:.3rem;color:#000;">ccc</span>
        </div>
        <div style="margin:0.4rem 0 0 3.7rem">
          <span class="count" style="" >32548</span>
        </div>
        <div style="float:right;width:0.5rem;margin:-.7rem -.6rem 0 0">
          <img src="~images/praise.png" alt="" style="width:.4rem;padding-left:.1rem">
          <div style="text-align:center;margin-top:.1rem"><span style="color:#ADADAD">0</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rank'
}
</script>

<style lang="stylus" scoped>
  .rank-header
    //  position :absolute
    width :100%
    background-color :rgb(14,163,255)
    color :rgb(206,237,255)
    text-align center
    .ranking-name
      font-size 0.4rem
      padding-top 0.5rem
    .img-div
      margin 0.5rem 0 0.5rem 0
    .top-guy
      font-size 0.4rem
    .user-icon
      width 3rem
      border: 1px solid #fff
      border-radius :50%
  .rank-body
    display flex
    flex-direction row
    width : 100%
    font-size :.35rem
    height :1.4rem
    .user-img
      height 1rem
      width 1rem
      border-radius:50%
    .user-info
      vertical-align middle
    .count
      color green
      font-size 0.5rem
</style>
