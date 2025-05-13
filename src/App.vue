<template>
  <v-app>

    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar> -->

    <v-content fluid>

      <section class="theLayout">

        <!-- Left sidebar -->
        <v-card height="100vh" class="sidebar-card v-sheet--tile" v-if="showSidebar">
          <v-navigation-drawer
            color="yellow"
            permanent
            class="sidebar"
          >
            <template v-slot:prepend>
              <spiral style="transform: scale(.40) translate(0, 0); position: relative; height: 255px; left: 0; top: 0; margin-bottom: -30px;"></spiral>
              <img :src="require('@/assets/images/timeout_tunnel_logo_small.png')" class="heroimage" style="position: absolute; top: 0"><br>
            </template>

            <v-list
              dense
              nav
            >
              <v-list-item link @click="$router.push('Home').catch(err => {})">
                <v-list-item-avatar>
                  <img src="@/assets/images/navicons/home.jpg">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="sidebar-myname">HOME</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item link @click="$router.push('History').catch(err => {})">
                <v-list-item-avatar>
                  <img src="@/assets/images/navicons/history.jpg">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="sidebar-myname">HISTORY OF TIME-OUT</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item link @click="$router.push('Photos').catch(err => {})">
                <v-list-item-avatar>
                  <img src="@/assets/images/navicons/photos.jpg">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="sidebar-myname">PHOTOS &amp; SCANS</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item link @click="$router.push('Downloads').catch(err => {})">
                <v-list-item-avatar>
                  <img src="@/assets/images/navicons/artwork.jpg">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="sidebar-myname">ARTWORK</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item link @click="$router.push('Guestbook').catch(err => {})">
                <v-list-item-avatar>
                  <img src="@/assets/images/navicons/guestbook.jpg">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="sidebar-myname">GUESTBOOK</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item link @click="$router.push('Contact').catch(err => {})">
                <v-list-item-avatar>
                  <img src="@/assets/images/navicons/contact.jpg">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="sidebar-myname">CONTACT</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list>
          </v-navigation-drawer>
        </v-card>

        <router-view class="router"/>

      </section>

      <!-- The global image lightbox -->
      <light-box></light-box>

    </v-content>
  </v-app>

</template>

<script>
import Spiral from '@/components/Spiral.vue'
import LightBox from '@/components/LightBox.vue'

export default {
  name: 'App',
  components: { Spiral, LightBox },
  data: () => ({
    //
  }),
  computed: {
    showSidebar() {
      return this.$route.name !== 'Landing'
    }
  }
};
</script>

<style lang="scss">
.theLayout {
  display: flex;
  .router {
    position: relative;
    flex: 1 1 auto;
    z-index: 1;
  }
  .sidebar-card {
    flex: 0 0 initial;
  }
}
</style>