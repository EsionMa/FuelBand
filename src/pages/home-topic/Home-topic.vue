<template>
  <div class="home-topic">
      <div class="back" >
        <img class="back-icon" src="~images/back.png" alt="" @click="back">
        <span class="top-bar-title">话题</span>
      </div>
      <div class="p-wrapper" ref="wrapper">
        <div class="p-content">
          <h1 class="p-title">运动的意义</h1>
          <div class="p-body">
            <p>1.助于培养人们勇敢顽强的性格、超越自我的品质、迎接挑战的意志和承担风险的能力。
            </p>
            <p>
              2.有助于培养人们的竞争意识、协作精神和公平观念。
            </p>
            <p>
              3.有助于丰富人们的文化生活，弘扬集体主义、爱国主义精神，增强国家和民族的向心力、凝聚力，都有着不可缺少的作用。
            </p>
            <p>
              体育是人类社会发展中，根据生产和生活的需要，遵循人体身心的发展规律，以身体练习为基本手段，达到增强体质，提高运动技术水平，进行思想品德教育，丰富社会文化生活而进行的一种有目的、有意识、有组织的社会活动，是伴随人类社会的发展而逐步建立和发展起来的一个专门的科学领域。
            </p>
            <p>
              体育是人类社会发展中，根据生产和生活的需要，遵循人体身心的发展规律，以身体练习为基本手段，达到增强体质，提高运动技术水平，进行思想品德教育，丰富社会文化生活而进行的一种有目的、有意识、有组织的社会活动，是伴随人类社会的发展而逐步建立和发展起来的一个专门的科学领域。
            </p>
          </div>
        </div>
      </div>
      <div class="p-footer">
        <img class="footer-write" src="~images/write.png" alt="">
        <p class="p-comment">小编那么骚气，评论一下</p>
        <img class="footer-comment" src="~images/comment.png" alt="">
        <span class="footer-comment-count">5372</span>
      </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
export default {
  name: "home-topic",
  methods: {
    show() {
      console.log('this.scroll')
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.wrapper, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style lang="stylus" scopoed>
.home-topic {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ffffff;

  .back {
    height: 1rem;
    top: 0;
    z-index: 50;
    background: #0EA3FF;
    width: 100%;
    vertical-align: middle;
  }

  .back-icon {
    padding: 0.2rem;
    width: 0.5rem;
  }

  .top-bar-title {
    position: absolute;
    font-size: 0.4rem;
    color: #ffffff;
    padding: 0.25rem 2.45rem;
  }

  .p-wrapper {
    position: relative;
    text-align: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .p-title {
    display: inline-block;
    font-weight: bold;
    font-size: 0.6rem;
    margin: 0.4rem auto;
  }

  .p-body {
    font-size: 0.4rem;
    text-align: left;
  }

  .p-body p {
    text-indent: 0.8rem;
    line-height: 0.6rem;
  }

  .p-footer {
    width: 100%;
    height: 0.7rem;
    background-color: #fff;
    display: table-cell;
    vertical-align: middle;
    z-index: 50;
    bottom: 0;
    position: absolute;
    text-align: center;
  }

  .footer-write {
    display: inline;
    margin-left: 0.4rem;
    width: 0.4rem;
  }

  .p-comment {
    display: inline-block;
    padding-top: 0.2rem;
    color: #707070;
  }

  .footer-comment {
    width: 0.5rem;
    margin-left: 2rem;
  }

  .footer-comment-count {
    color: #707070;
  }
}
</style>
