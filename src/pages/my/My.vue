<template>
  <div>
    <div class="header">
      <div class="header-user">
          <div class="user-div-img">
            <img class="user-img" src="~images/SomeUser.png" />
          </div>
          <div class="user-name">
            <span>b5204ba1dff7</span>
          </div>
      </div>
      <div class="RunMessage">
        <div class="RunMessage-SetpCount">
          <p class="RunMessage-num">256</p>
          <p class="RunMessage-text">日均步数</p>
        </div>
        <div class="RunMessage-Kilometers">
          <p class="RunMessage-num">0.33</p>
          <p class="RunMessage-text">总公里数</p>
        </div>
        <div class="RunMessage-Days">
          <p class="RunMessage-num">0</p>
          <p class="RunMessage-text">达标天数</p>
        </div>
      </div>
    </div>
    <div class="Content-body">
      <div class="div-title">
        <p>我的设备</p>
      </div>
      <ul>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/Equipment.png" />
            <span class="content-menu">没有设备</span>
            <span class="right-nav-text">
              去添加
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
      </ul>
      <div class="div-title">
        <p>第三方接入</p>
      </div>
      <ul>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/WeChat.png" />
            <span class="content-menu">微信运动</span>
            <span class="right-nav-text">
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/QuestionMark.png" />
            <span class="content-menu">微信运动接入说明</span>
            <span class="right-nav-text">
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/QQ.png" />
            <span class="content-menu">QQ运动</span>
            <span class="right-nav-text">
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
      </ul>
      <div class="div-title">
        <p>目标设置</p>
      </div>
      <ul>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/Aims.png" />
            <span class="content-menu">运动目标</span>
            <span class="right-nav-text">
              8000
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/Star.png" />
            <span class="content-menu">连续0天达成目标</span>
            <span class="right-nav-text">
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
      </ul>
      <div class="div-title">
        <p>更多</p>
      </div>
      <ul>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/Lung.png" />
            <span class="content-menu">肺活量测试</span>
            <span class="right-nav-text">
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/Setting.png" />
            <span class="content-menu">偏好设置</span>
            <span class="right-nav-text">
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/Plane.png" />
            <span class="content-menu">意见反馈</span>
            <span class="right-nav-text">
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
        <li class="list-body">
          <div class="content">
            <img class="icon-image" src="../../assets/images/Idea.png" />
            <span class="content-menu">关于</span>
            <span class="right-nav-text">
              <img class="right-image" src="../../assets/images/enter.png" />
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'My'
}
</script>

<style lang="stylus" scoped>
  .header
    position:relative
    width : 100%
    height : 6rem
    background : #14a5fd
    padding-top : .5rem
    .header-user
      position:relative
      width : 3rem
      height : 3.3rem
      margin : 0 auto
      .user-div-img
        width : 2.2rem
        height : 2.2rem
        margin : 0 auto
        .user-img
          width : 100%
          height : 100%
          border : .06rem solid #e1e1e1
          border-radius : 50%
          -moz-border-radius : 50%
          -webkit-border-radius : 50%
      .user-name
        width : 100%
        position : absolute
        bottom : 0
        text-align : center
        color : #ddddff
        font-size : .3rem
    .RunMessage
       position : absolute
       bottom : 0
       width : 100%
       height : 2.1rem
       padding : 0.1rem
       .RunMessage-SetpCount
        float : left
        width : 32%
        height : 95%
        border-right : 0.02rem solid #fff
        text-align : center
       .RunMessage-Kilometers
        float : left
        width : 32%
        height : 95%
        border-right : 0.02rem solid #fff
        text-align : center
       .RunMessage-Days
        float : left
        width : 32%
        height : 95%
        text-align : center
       .RunMessage-num
        color : #ddddff
        font-size : .8rem
        margin-top : .2rem
       .RunMessage-text
        color : #ddddff
        font-size : .3rem
        margin-top : .3rem
  .Content-body
    overflow-y : auto
    width : 100%
    height : 6rem
   .div-title
    background : #efe7e7
   .div-title p
    font-size : .08rem
    padding : .2rem
    padding-left : .4rem
   .list-body
    overflow : hidden
    width : 100%
    font-size : .35rem
    line-height : 1rem
    .content
     border : 1px solid #eee
     .icon-image
      margin-left : .2rem
      margin-top : .15rem
      float : left
      width : .6rem
      height : .6rem
     .content-menu
      margin-left : .4rem
      font-size : .3rem
     .right-nav-text
      color : #CACACA
      float : right
      font-size : .3rem
     .right-image
      padding : .3rem
      width : .4rem
      height : .4rem
</style>
