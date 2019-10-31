<template>
  <div>
    <label>
      <input type="text" v-model="inputStr"  @input="valChange" v-on="inputListeners"/>
    </label>
  </div>
</template>

<script>
export default {
  name: 'ElInput',
  props: {
    initValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      inputStr: this.initValue
    }
  },
  methods: {
    valChange () {
      this.$emit('update:initValue', this.inputStr)
    }
  },
  computed: {
    inputListeners () {
      let vm = this
      let obj = Object.assign({},
        this.$listeners,
        {
          input (event) {
            vm.$emit('input', event.target.value)
          }
        })
      console.log(obj)
      return obj
    }
  }
}
</script>

<style scoped>

</style>
