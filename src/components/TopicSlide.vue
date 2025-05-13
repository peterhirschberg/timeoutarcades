<template>
  <v-card class="topic-card" shaped outlined max-width="400" @click="$emit('click')">
    <v-img
      class="white--text align-end"
      :height="desc && desc.length ? '300px' : '400px'"
      :src="image"
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>        
      <v-card-title class="text-shadow">{{ title }}</v-card-title>
    </v-img>
    <v-card-text class="text--primary" v-if="desc && desc.length">
      <div>{{ desc }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ToysCollectiblesView',
  props: {
    image: String,
    title: String,
    desc: String
  }
}
</script>

<style scoped lang="scss">
.topic-card {
  cursor: pointer;
  margin: 20px;
  .text-shadow {
    text-shadow:
      0 0 3px #000,
      0 0 5px #000;
  }
  transition: all 500ms;
  &:hover {
    transform: scale(1.1);
  }
}
</style>