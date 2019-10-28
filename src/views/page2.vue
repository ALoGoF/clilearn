<template>
  <div  id="map" v-title="pageTitle" v-icon="require('../../public/QQ.png')">
  </div>
</template>
<script>
import { map, tileLayer } from 'leaflet'

export default {
  data () {
    return {
      pageTitle: '第二页'
    }
  },
  methods: {
    createMap () {
      this.layer = map('map', {
        minZoom: 3,
        maxZoom: 17,
        center: [32.550339, 106.114129],
        zoom: 4,
        attributionControl: false
      })
      let url = 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
      tileLayer(url).addTo(this.layer)
    }
  },
  mounted () {
    this.createMap()
  }
}
</script>
<style>
</style>
