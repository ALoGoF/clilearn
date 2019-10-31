<template>
  <div class="home" v-title="pageTitle" v-icon="require('../../public/wode.png')" >
    <div>第一页</div>
    <h2>父子间传值和子组件更新父组件的值/为组件绑定原生事件：<br/></h2>
    <div >{{inputStr}}/{{Str}}</div>
   v-bind:value input => value =  $event.target.value
    <el-input v-model="Str" :initValue.sync="inputStr" @input="conInput"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ElInput from './input'
export default {
  name: 'page1',
  components: {
    ElInput: ElInput
  },
  data () {
    return {
      Str: '',
      inputStr: '请输入文字',
      pageTitle: '主页'
    }
  },
  methods: {
    conInput (val) {
    }
  }
}
</script>
