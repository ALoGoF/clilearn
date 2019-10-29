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
      return Object.assign({},
        this.$listeners,
        {
          input (event) {
            vm.$emit('input', event.target.value)
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
