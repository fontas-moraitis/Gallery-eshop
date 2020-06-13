<template>
  <div>
    <template v-if="loading">
      <div class="loader-wrapper">
        <div class="spin"></div>
      </div>
    </template>
    <template v-else-if="cmsAboutData">
      <div class="wrapper">
        <div class="container container--column">
          <h1 class="page-header">about the artist</h1>
          <div class="intro-wrapper">
            <div class="intro-wrapper__artist">
              <img :src="cmsAboutData[0].image_stavros" :alt="cmsAboutData[0].title" class="ghost--left">
              <div class="text-wrapper ghost--right">
                <h2 class="title">{{cmsAboutData[0].title}}</h2>
                <p class="text">{{cmsAboutData[0].bio}}</p>
              </div>
            </div>
            <div class="intro-wrapper__studio">
              <div class="text-wrapper ghost--left">
                <h2 class="title">{{cmsAboutData[0].studio}}</h2>
                <p class="text">{{cmsAboutData[0].aboutStudio}}</p>
              </div>
              <img :src="cmsAboutData[0].image_studio" :alt="cmsAboutData[0].title" class="ghost--right">
            </div>
          </div>
          <TheFooter />
        </div>
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

import TheFooter from '@/components/TheFooter.vue'

export default {
  components: {
    TheFooter
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      cmsAboutData: state => state.aboutData.data,
      loading: state => state.aboutData.loading,
      error: state => state.aboutData.error
    })
  },
  methods: {
    ...mapActions([
      'loadAboutData'
    ])
  },
  created () {
    this.loadAboutData()
  }
}
</script>

<style lang="scss" scoped>
  .intro-wrapper {
    max-width: 920px;
    margin: 5% 0;
    padding: 0 $pad-medium;
    &__artist {
      display: flex;
      align-items: center;
      height: 420px;
      margin-bottom: 20%;
      img {
        height: 100%;
        width: auto;
        margin-right: 12%;
      }
      .text-wrapper {
        display: flex;
        flex-direction: column;
      }
    }
    &__studio {
      display: flex;
      align-items: center;
      height: 420px;
      img {
        height: 100%;
        width: auto;
        margin-left: 12%;
      }
    }
  }

  .text-wrapper {
    @include flex-center-column;
    .title {
      font-size: 24px;
      font-weight: $font-medium;
      color: rgb(48, 48, 53);
      margin-bottom: $marg-xlarge
    }
  }

  @media screen and (max-width: 768px) {
    .intro-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 920px;
      margin: 0;
      padding: 0;
      &__artist {
        @include flex-center-column;
        height: 100%;
        margin-bottom: 0;
        img {
          height: 100%;
          width: 100%;
          margin-right: 0;
          margin: $marg-large 0;
        }
        .text-wrapper {
          width: 100vw;
          height: 200px;
          display: flex;
          flex-direction: column;
          margin: $marg-xlarge 0;
          padding: 0 $pad-medium;
        }
      }
      &__studio {
        @include flex-center-column;
        height: 100%;
        .text-wrapper {
          order: 2;
          margin: $marg-xlarge 0;
          padding: 0 $pad-medium;
        }
        img {
          height: 100%;
          width: 100%;
          margin-left: 0;
          order: 1;
          margin: $marg-large 0;
        }
      }
    }
  }
</style>
