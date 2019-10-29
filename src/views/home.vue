<template>
  <div class="warp-container">
    <nav class="nav">
      <router-link to="/page1" class="iconfont icon-shaozi">page1</router-link>
      <router-link to="/page2">page2</router-link>
    </nav>
      <router-view class="content-container"/>
  </div>
</template>

<script>
export default {
  name: 'page1'
}
</script>

<style lang="scss" scoped>
  .warp-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .nav {
    height: 20px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  .content-container {
    height: calc(100% - 20px);
    width: 100%;
    overflow: hidden;
  }
</style>
