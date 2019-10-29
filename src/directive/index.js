import Vue from 'vue'

Vue.directive('title', {
  bind: function (el, binding, vNode, oldVNode) {
    document.title = binding.value
  }
})
Vue.directive('icon', {
  bind (el, binding) {
    let linkDom = document.getElementById('iconLink')
    linkDom.href = binding.value
  }
})
