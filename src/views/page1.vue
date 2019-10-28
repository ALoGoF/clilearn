<template>
  <div class="home" v-title="pageTitle" v-icon="require('../../public/wode.png')" >
    <div>第一页</div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'page1',
  components: {
  },
  data () {
    return {
      pageTitle: '主页'
    }
  }
}
</script>
