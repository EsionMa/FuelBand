<template>
  <div>
    <div class="home-header">
      <div class="home-header-info">
        <p class="home-header-title">总距离（公里）</p>
        <div class="step-div">
         <span class="step-num">0.00</span>
        </div>
        <div style="display:block;margin:0.4rem 0 0 1rem">
          <span>目标设定✎</span>
        </div>
        <div class="run-btn">
          <div class="run-btn-name">开始跑步</div>
        </div>
      </div>
    </div>
    <div class="home-body">
      <div style="margin-top:.2rem">
        <p style="float:left;">你的BMI指数</p>
        <p style="float:right;margin-right:.2rem">✎</p>
      </div>
      <img src="~images/BMI.png" style="width:6rem;margin-left:10%;margin-top:.3rem" alt="">
      <img src="~images/standard.png" style="width:6rem;margin-top:.3rem" alt="">
      <div style="width:100%;height:.3rem;background-color:#F9F9F9"></div>
      <img src="~images/weight.png" style="width:100%" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Train'
}
</script>

<style lang="stylus" scoped>
  // header部分
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
        margin-left :0.7rem
        margin-bottom :0.4rem
      .step-div
        margin-left :0.2rem
      .step-num
        font-size :1.5rem
      .run-btn
        border :0.01rem solid #fff
        width :2rem
        height :0.65rem
        border-radius :0.5rem
        margin-top :0.5rem
        margin-left :0.6rem
        background-color :#26ADFF
        .run-btn-name
          text-align :center
          margin-top :0.2rem
</style>
