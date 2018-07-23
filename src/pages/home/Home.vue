<template>
  <div class="home">
    <div ref="wrapper">
      <div class="home-header" >
        <div class="home-header-info" >
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
      <ul>
        <router-link tag="li" to="/home/homesleep">
          <div class="content" >
            <img class="icon-item" src="~images/sleep.png"  alt="">
            <span>睡眠监控</span>
            <div class="icon-info" >
              <span >无数据</span>
              <img class="icon-enter" src="~images/enter.png"  alt="">
            </div>
          </div>
        </router-link>
        <div class="border-bottom"></div>
        <li>
          <div class="content">
            <img class="icon-item" src="~images/rate.png"  alt="">
            <span>心率检测</span>
            <div class="icon-info" >
              <span >无数据</span>
              <img class="icon-enter" src="~images/enter.png"   alt="">
            </div>
          </div>
          <div class="border-bottom"></div>
        </li>
        <li>
          <div class="content">
            <img class="icon-item" src="~images/remind.png"  alt="">
            <span>喝水提醒</span>
            <div class="icon-info">
              <span>0杯</span>
              <img class="icon-enter" src="~images/enter.png"  alt="">
            </div>
          </div>
          <div class="border-bottom"></div>
        </li>
        <li>
          <div class="content">
            <img class="icon-item" src="~images/exercise.png"  alt="">
            <span>运动报告</span>
            <div class="icon-info">
              <span></span>
              <img class="icon-enter" src="~images/enter.png"  alt="">
            </div>
          </div>
          <div class="border-bottom" ></div>
        </li>
        <router-link tag="li" to="/home/hometopic">
          <div class="content">
            <img class="icon-item" src="~images/chat.png"  alt="">
            <span>话题</span>
            <div class="icon-info">
              <span></span>
              <img class="icon-enter" src="~images/enter.png"  alt="">
            </div>
          </div>
        </router-link>
      </ul>
    </div>
    <router-view></router-view>
  </div>  
</template>

<script>
// import Scroll from 'base/scroll/scroll'
import Bscroll from "better-scroll";
export default {
  name: "Home",
  mounted() {
    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, { click: true });
    }, 20);
  }
};
</script>

<style lang="stylus" scoped>
.home-header {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgb(14, 163, 255);
  color: rgb(206, 237, 255);
  height: 5.5rem;

  .home-header-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .home-header-title {
      font-size: 0.3rem;
      margin-left: 0.4rem;
      margin-bottom: 0.4rem;
    }

    .step-div {
      margin-left: 0.5rem;
    }

    .step-num {
      font-size: 2rem;
    }

    .run-btn {
      border: 0.01rem solid #fff;
      width: 2rem;
      height: 0.65rem;
      border-radius: 0.5rem;
      margin-top: 0.5rem;
      background-color: #26ADFF;

      .run-btn-name {
        text-align: center;
        margin-top: 0.2rem;
      }
    }
  }
}

// body部分
.content {
  margin: 0.3rem 0 0 0.2rem;
}

.content:active {
  background-color: #E8E8E8;
}

.icon-item {
  width: 0.7rem;
}

.icon-info {
  float: right;
  margin: 0.15rem 0.1rem 0 0;

  .icon-enter {
    width: 0.35rem;
  }
}

.border-bottom {
  border-bottom: 1px solid #F7F7F7;
  width: 82%;
  margin: 0.1rem 0 0 0.8rem;
}

.icon-info span {
  color: #B5B5B5;
}
</style>
