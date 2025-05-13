import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Home from '../views/Home.vue'
import History from '../views/History.vue'
import Photos from '../views/Photos.vue'
import Downloads from '../views/Downloads.vue'
import Guestbook from '../views/Guestbook.vue'
import SignGuestbook from '../views/SignGuestbook.vue'
import Contact from '../views/Contact.vue'
import Album from '../components/Album.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: { title: 'Time-Out' }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { title: 'Time-Out' }
  },
  {
    path: '/History',
    name: 'History',
    component: History,
    meta: { title: 'Time-Out - History' }
  },
  {
    path: '/Photos',
    name: 'Photos',
    component: Photos,
    meta: { title: 'Time-Out - Photos & Scans' }
  },
  {
    path: '/Downloads',
    name: 'Downloads',
    component: Downloads,
    meta: { title: 'Time-Out - Artwork' }
  },
  {
    path: '/Guestbook',
    name: 'Guestbook',
    component: Guestbook,
    meta: { title: 'Time-Out - Guestbook' }
  },
  {
    path: '/SignGuestbook',
    name: 'SignGuestbook',
    component: SignGuestbook,
    meta: { title: 'Time-Out - Sign The Guestbook' }
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Time-Out - Contact' }
  },
  {
    path: '/Album',
    name: 'Album',
    component: Album,
    meta: { title: 'Time-Out - Album' }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
