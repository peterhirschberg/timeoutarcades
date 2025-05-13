<template>
  <article class="content-page">
    <div class="back" @click="goBack">&lt; BACK TO PHOTOS &amp; SCANS</div>
    <h1 class="heading">{{ albumData.title }}</h1><br>
    <p v-html="albumData.longDescription"></p>
    <lightbox-slides :slides="albumData.slides"></lightbox-slides>
  </article>
</template>

<script>
import LightboxSlides from '@/components/LightboxSlides.vue'
import albumData from '@/assets/data/albumData.js'

export default {
  name: 'Album',
  components: { LightboxSlides },
  mounted() {
    document.title = 'Time-Out - ' + this.albumData.title.toLowerCase().replace(/\b[a-z]|['_][a-z]|\B[A-Z]/g, function(x){return x[0]==="'"||x[0]==="_"?x:String.fromCharCode(x.charCodeAt(0)^32)})
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  },
  computed: {
    albumParam () {
      return this.$route.query.album
    },
    albumData () {
      return albumData[this.albumParam]
    }
  }
}
</script>

<style scoped lang="scss">
.back {
  position: absolute;
  top: 20px;
  left: 40px;
  font-size: 12px;
  cursor: pointer;
}
</style>