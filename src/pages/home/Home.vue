<template>
  <div class="container">
    <div class="home-header">
      <div class="home-header-info">
        <p class="home-header-title">今日步数</p>
        <div class="step-div">
         <span class="step-num">0</span><span >步</span>
        </div>
        <div style="display:block">
          <span>0.0 Kcal</span>
          <span >|</span>
          <span>0.00 km</span>
        </div>
        <div class="run-btn">
          <div class="run-btn-name">去跑步</div>
        </div>
      </div>
    </div>
    <div class="home-body" >
      <ul>
        <li>
          <div class="content" style="margin:0.3rem 0 0 0.2rem;">
            <img src="../../assets/images/sleep.png" style="width:0.7rem;" alt="">
            <span>睡眠监控</span>
            <div style="float:right;margin:0.15rem 0.1rem 0 0 ">
              <span style="color:#B5B5B5">无数据</span>
              <img src="../../assets/images/enter.png" style="width:0.35rem;"  alt="">
            </div>
          </div>
          <div style="border-bottom:1px solid #F7F7F7;width:6rem;margin:0.1rem 0 0 0.8rem;margin"></div>
        </li>
        <li>
          <div class="content" style="margin:0.3rem 0 0 0.2rem">
            <img src="../../assets/images/rate.png" style="width:0.7rem;" alt="">
            <span>睡眠监控</span>
            <div style="float:right;margin:0.15rem 0.1rem 0 0 ">
              <span style="color:#B5B5B5">无数据</span>
              <img src="../../assets/images/enter.png" style="width:0.35rem;"  alt="">
            </div>
          </div>
          <div style="border-bottom:1px solid #F7F7F7;width:6rem;margin:0.1rem 0 0 0.8rem;margin"></div>
        </li>
        <li>
          <div class="content" style="margin:0.3rem 0 0 0.2rem">
            <img src="../../assets/images/remind.png" style="width:0.7rem;" alt="">
            <span>喝水提醒</span>
            <div style="float:right;margin:0.15rem 0.1rem 0 0 ">
              <span style="color:#B5B5B5">0杯</span>
              <img src="../../assets/images/enter.png" style="width:0.35rem;"  alt="">
            </div>
          </div>
          <div style="border-bottom:1px solid #F7F7F7;width:6rem;margin:0.1rem 0 0 0.8rem;margin"></div>
        </li>
        <li>
          <div class="content" style="margin:0.3rem 0 0 0.2rem">
            <img src="../../assets/images/exercise.png" style="width:0.7rem;" alt="">
            <span>运动报告</span>
            <div style="float:right;margin:0.15rem 0.1rem 0 0 ">
              <span></span>
              <img src="../../assets/images/enter.png" style="width:0.35rem;"  alt="">
            </div>
          </div>
          <div style="border-bottom:1px solid #F7F7F7;width:6rem;margin:0.1rem 0 0 0.8rem;margin"></div>
        </li>
        <li>
          <div class="content" style="margin:0.3rem 0 0 0.2rem">
            <img src="../../assets/images/chat.png" style="width:0.7rem;" alt="">
            <span>话题</span>
            <div style="float:right;margin:0.15rem 0.1rem 0 0 ">
              <span></span>
              <img src="../../assets/images/enter.png" style="width:0.35rem;"  alt="">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="stylus" scoped>
  .home-header
    position :relative
    display: flex
    flex-direction: column
    background-color: rgb(14,163,255)
    color: rgb(206,237,255)
    height: 5.5rem
    .home-header-info
      position :absolute
      top :50%
      left :50%
      transform :translate(-50%, -50%)
      .home-header-title
        font-size :0.30rem
        margin-left :0.4rem
        margin-bottom :0.4rem
      .step-div
        margin-left :0.5rem
      .step-num
        font-size :2rem
      .run-btn
        border :0.01rem solid #fff
        width :2rem
        height :0.65rem
        border-radius :0.5rem
        margin-top :0.5rem
        .run-btn-name
          text-align :center
          margin-top :0.2rem
  .content:active
    background-color :#E8E8E8
</style>
