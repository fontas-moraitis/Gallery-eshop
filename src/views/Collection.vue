<template>
  <div>
    <template v-if="loading">
      <div class="loader-wrapper">
        <div class="spin"></div>
      </div>
    </template>
    <template v-else-if="cmsData">
      <div class="collection">
        <div class="wrapper">
          <div class="container container--column">
            <p class="page-header">a journey in form</p>
            <div class="collection__expo">
              <SingleProduct
                v-for="(product, index) in cmsData"
                :key="index"
                :product="product"
              />
            </div>
            <TheFooter />
          </div>
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

import SingleProduct from '@/components/SingleProduct'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'Collection',
  components: {
    SingleProduct,
    TheFooter
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      cmsData: state => state.collectionData.data,
      loading: state => state.collectionData.loading
    })
  },
  methods: {
    ...mapActions([
      'loadCollectionData'
    ])
  },
  created () {
    this.loadCollectionData()
  }
}
</script>

<style lang="scss" scoped>
  .collection{
    &__expo {
      max-width: 1120px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
  }
</style>
