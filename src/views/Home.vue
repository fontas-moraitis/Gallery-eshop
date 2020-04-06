<template>
  <div>
    <template v-if="loading">
      <div class="loader-wrapper">
        <div class="spin"></div>
      </div>
    </template>
    <template v-else-if="cmsMainGallery">
      <div class="home">
        <MainGallery :cmsMainGallery="cmsMainGallery" />
      </div>
    </template>
    <template v-else>
      <router-link :to="{ name: 'Home' }">
        <div class="error-wrapper">
          <img src="@/assets/broken-pot.jpg" alt="broken pot">
          <p class="error-text">something went wrong, click here to go home</p>
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
  computed: {
    ...mapState({
      cmsMainGallery: state => state.homeData.data,
      loading: state => state.homeData.loading,
      error: state => state.homeData.error
    })
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
