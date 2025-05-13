<template>
  <div class="Landing content-page">
    <spiral @click.native="onNavigate" class="spiral"></spiral>
    <img :src="require('@/assets/images/landinghero.png')" class="heroimage"><br>
    <h1 class="herotext">The Time-Out Arcade Virtual Museum</h1>
    <img :src="require('@/assets/images/entrancelettering.png')" class="entrancelettering">
    <p class="disclaimer">
      Not affiliated with Time-Out Amusement Centers. All trademarks used are properties of their respective owners.<br>
      Timeouttunnel.com is copyright © 2025 Peter Hirschberg and is intended for historical preservation, entertainment and information purposes only.
    </p>
  </div>
</template>

<script>
import Spiral from '@/components/Spiral.vue'

export default {
  name: 'Landing',
  components: { Spiral },
  methods: {
    onNavigate() {
      this.$router.push('/Home').catch(err => {})
    }
  }
}
</script>

<style scoped lang="scss">
.Landing {
  text-align: center;
  background-color: #ffeb3b;
  overflow: hidden;
  .spiral {
    top: 435px;    
  }
  .heroimage {
    position: relative;
    pointer-events: none;
  }
  .herotext {
    position: relative;
    top: -54px;
    font-weight: bold;
    text-align: center;
    font-size: 32px;
    text-transform: uppercase;
    color: black;
    pointer-events: none;
  }
  .entrancelettering {
    position: relative;
    top: -36px;
    opacity: .5;
    pointer-events: none;
  }
  .disclaimer {
    position: absolute;
    top: 780px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 12px;
  }
}
</style>