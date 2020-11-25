<template>
  <div>
    <template v-if="loading">
      <div class="loader-wrapper">
        <div class="spin"></div>
      </div>
    </template>
    <template v-else-if="workshopData">
      <div class="wrapper">
        <div class="container container--column">
          <h1 class="page-header">workshop with the artist</h1>
          <main class="intro-wrapper">
            <div class="intro-wrapper__workshops">
              <img :src="workshopData[0].image" :alt="workshopData[0].title" class="ghost--left">
              <div class="text-wrapper ghost--right">
                <h2 class="title">{{workshopData[0].title}}</h2>
                <p class="text">{{workshopData[0].description}}</p>
              </div>
            </div>
          </main>
          <TheFooter />
        </div>
      </div>
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
  computed: {
    ...mapState({
      workshopData: state => state.workshopData.data,
      loading: state => state.workshopData.loading,
      error: state => state.workshopData.error
    })
  },
  methods: {
    ...mapActions([
      'loadWorkshopData'
    ])
  },
  created () {
    this.loadWorkshopData()
  }
}
</script>

<style lang="scss" scoped>
  .intro-wrapper {
    max-width: 920px;
    margin: 5% 0;
    padding: 0 $pad-medium;
    &__workshops {
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

  @media screen and (max-width: 1366px) {
    .intro-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 920px;
      margin: 0;
      padding: 0;
      &__workshops {
        @include flex-center-column;
        height: 100%;
        margin-bottom: 0;
        img {
          display: block;
          height: 100%;
          width: 100%;
          margin-right: 0;
          margin: $marg-large 0;
        }
        .text-wrapper {
          width: 100vw;
          height: 100%;
          display: flex;
          flex-direction: column;
          margin: $marg-xlarge 0;
          padding: 0 $pad-medium;
        }
      }
    }
  }
</style>
