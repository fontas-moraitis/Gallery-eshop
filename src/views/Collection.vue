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
            <div class="categories-wrapper">
              <div
                v-for="(category, index) in filterOptions"
                :key="index"
                @click.prevent="activeCategory = category.value"
                class="categories-wrapper__category"
              >
              {{category.text}}
              </div>
            </div>
            <div class="collection__expo">
              <SingleProduct
                v-for="(product, index) in filteredProducts"
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
    return {
      activeCategory: null
    }
  },
  computed: {
    ...mapState({
      cmsData: state => state.collectionData.data,
      loading: state => state.collectionData.loading
    }),
    categories () {
      const categArray = []
      this.cmsData.forEach(prod => {
        if (prod.category !== undefined) {
          categArray.push(prod.category)
        }
      })
      const uniqCateg = [...new Set(categArray.flat())]
      return uniqCateg
    },
    filterOptions () {
      const categories = this.categories.map(category => ({ text: category, value: category }))
      return [{ text: 'all', value: null }, ...categories]
    },
    filteredProducts () {
      if (this.activeCategory === null) {
        return this.cmsData
      } else {
        return this.cmsData.filter(product => {
          if (product.category !== undefined) {
            return product.category.includes(this.activeCategory)
          }
        })
      }
    }
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
  .collection {
    .categories-wrapper {
      margin-bottom: $marg-xxlarge;
      display: flex;
      &__category {
        margin: 0 $marg-medium;
        cursor: pointer;
        &:hover {
          color: salmon;
        }
      }
    }
    &__expo {
      max-width: 1320px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      animation: ghost 1s ease-in-out;
    }
  }
</style>
