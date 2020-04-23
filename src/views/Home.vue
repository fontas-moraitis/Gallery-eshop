<template>
  <div>
    <template v-if="loading">
      <div class="loader-wrapper">
        <div class="spin"></div>
      </div>
    </template>
    <template v-else-if="cmsMainGallery">
      <div class="home">
        <MainGallery
         :cmsMainGallery="cmsMainGallery"
         :isKeyboardNav="isKeyboardNav"
        />
      </div>
    </template>
    <template v-else>
      <router-link :to="{ name: 'Home' }">
        <div class="error-wrapper">
          <img src="@/assets/broken-pot.jpg" alt="broken pot">
          <button class="error-text button button--light">something went wrong, click here to go home</button>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MainGallery from '@/components/MainGallery.vue'

export default {
  name: 'Home',
  components: {
    MainGallery
  },
  data () {
    return {
      isKeyboardNav: true
    }
  },
  computed: {
    ...mapState({
      cmsMainGallery: state => state.homeData.data,
      loading: state => state.homeData.loading,
      error: state => state.homeData.error
    })
  },
  beforeRouteLeave (to, from, next) {
    console.log('route change')
    this.isKeyboardNav = false
    next(true)
  },
  methods: {
    ...mapActions([
      'loadHomeData'
    ])
  },
  created () {
    this.loadHomeData()
  }
}
</script>
