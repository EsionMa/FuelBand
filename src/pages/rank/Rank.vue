<template>
  <div class="container">
    <div class="rank-header" >
      <div class="rank-header-info" >
        <p class="rank-header-title">排名</p>
        <img class="top-icon" src="~images/SomeUser.png" alt="">
        <div class="rank-header-covername" style="display:block">
          <span>Admin占据了封面</span>
        </div>
      </div>
    </div>
    <div class="rank-body">
      <div class="my-border" ></div>
      <div class="rank-my-info" >
        <img class="my-icon" src="~images/SomeUser.png" >
        <span>Admin</span>
        <div class="step-praise-account" >
          <div class="step-account">
            <span class="step-account-num">65547</span>
          </div>
          <div class="praise-account" >
            <img class="praise-account-img" src="~images/praise.png">
            <p class="praise-account-num">32</p>
          </div>
        </div>
      </div>
      <div class="my-border"></div>
    </div>
    <div class="rank-list">
      <div class="rank-my-info">
        <span class="rank-num">1</span>
        <img class="friend-icon" src="~images/SomeUser.png">
        <span>Admin</span>
        <div class="step-praise-account">
          <div class="step-account">
            <span class="step-account-num">65547</span>
          </div>
          <div class="praise-account">
            <img src="~images/praise.png" class="praise-account-img">
            <p class="praise-account-num">32</p>
          </div>
        </div>
      </div>
      <div class="rank-my-info">
        <span class="rank-num">2</span>
        <img class="friend-icon" src="~images/SomeUser.png">
        <span>Base</span>
        <div class="step-praise-account">
          <div class="step-account">
            <span class="step-account-num">40000</span>
          </div>
          <div class="praise-account">
            <img src="~images/praise.png" class="praise-account-img">
            <p class="praise-account-num">32</p>
          </div>
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
  // header部分
  .rank-header
    position :relative
    display: flex
    flex-direction: column
    background-color: rgb(14,163,255)
    color: rgb(206,237,255)
    height: 5.5rem
    .rank-header-info
      position :absolute
      top :50%
      left :50%
      transform :translate(-50%, -50%)
      .rank-header-title
        font-size :0.40rem
        margin-left :0.6rem
        margin-bottom :.8rem
      .top-icon
        width: 2rem
        height: 2rem
        border :1px solid
        border-radius :50%
        margin-bottom  :.5rem
  .my-border
    width:100%
    height:.2rem
    background-color:#F9F9F9
  .rank-my-info
    height:1.2rem
    margin-top:.1rem
    .my-icon
      width:1rem
      height:1rem
      border:1px solid #fff
      border-radius:50%
      margin-left:.4rem
    .step-praise-account
      float right
      .step-account
        margin:.3rem .8rem 0 0
        .step-account-num
          color:#46B948
          font-size:0.5rem
      .praise-account
        margin:-.7rem 0 0 1.5rem
        .praise-account-img
          width:.4rem
          margin-left:0.15rem
        .praise-account-num
          text-align:center
          margin-top:.1rem
          color:#ADADAD
    .rank-num
      margin-left:.1rem
      color:#A2A2A2
    .friend-icon
      width:1rem
      height:1rem
      border:1px solid #fff
      border-radius:50%
      margin-left:.1rem
</style>
