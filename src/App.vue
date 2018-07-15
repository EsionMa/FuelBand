<template>
  <div>
      <router-view></router-view>
      <tab></tab>
  </div>
</template>

<script>
import Tab from './pages/tab/Tab'
export default {
  name: 'app',
  components: {
    Tab
  }
}
</script>

<style lang="stylus" scoped>

</style>
