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
        <div class="RunMessage-SetpCount"></div>
        <div class="RunMessage-Kilometers"></div>
        <div class="RunMessage-Days"></div>
      </div>
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
        font-size : .5rem
    .RunMessage
       position : absolute
       bottom : 0
       width : 100%
       height : 2.1rem
       border : 1px solid black

</style>
