<template>
  <article class="content-page">
    <h1 class="heading">PHOTOS &amp; SCANS</h1><br>

    <v-layout row wrap justify-start>
      <topic-slide v-for="(album, key) in albumData"
        :image="album.heroImage"
        :title="album.title"
        :desc="album.shortDescription"
        :key="key"
        @click="onClick(key)"
      >
      </topic-slide>
    </v-layout>
 
  </article>
</template>

<script>
import TopicSlide from '@/components/TopicSlide.vue'
import albumData from '@/assets/data/albumData.js'

export default {
  name: 'Photos',
  components: { TopicSlide },
  methods: {
    onClick(album) {
      this.$router.push({ name: "Album", query: {album: album} }).catch(err => {})
    }
  },
  computed: {
    albumData() {
      return albumData
    }
  }
}
</script>

