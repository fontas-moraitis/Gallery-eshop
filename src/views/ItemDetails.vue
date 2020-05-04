<template>
  <div>
    <template v-if="product.loading">
      <div class="loader-wrapper">
        <div class="spin"></div>
      </div>
    </template>
    <template v-else-if="product.data">
        <div class="wrapper">
          <div class="container container--column">
            <div class="bread-cramp">
              <router-link :to="{ name: 'Home' }">home</router-link> /
              <router-link :to="{ name: 'Collection' }">shop</router-link> /
              <span class="medium">{{comProduct.prodTitle}}</span>
            </div>
            <div class="item-wrapper">
              <div class="additional-images-wrapper">
                <div
                  v-for="(image, index) in comProduct.additionalImages"
                  :key="index"
                  @click="focusImage(index)"
                  class="additional-images ghost--no-motion"
                >
                  <img :src="image.filename" :alt="comProduct.prodTitle">
                </div>
              </div>
              <div>
                <img
                  class="item-wrapper__img ghost--no-motion"
                  :key="mainImage.index"
                  :src="mainImage.img"
                  :alt="comProduct.prodTitle"
                  @click="handlePopUp"
                >
              </div>
              <div class="item-wrapper__text">
                <p class="item-title">{{comProduct.prodTitle}}</p>
                <p class="item-desc">{{comProduct.prodDescription}}</p>
                <p class="item-info-title medium">DETAILS:</p>
                <p class="item-info">dimensions: {{comProduct.prodDimensions}} cm</p>
                <p class="item-info">weight: {{comProduct.prodWeight}} kg</p>
                <p class="item-price medium">{{comProduct.prodPrice | currency}} | <span class="price-info">(price per item)</span></p>
                <div class="item-buttons">
                    <QuantityInput
                      :value="1"
                      @input="handleQuantity"
                    />
                    <button
                      @click.prevent="handleSetToCart"
                      class="button button--dark ml-large"
                    >
                      add to cart
                    </button>
                </div>
              </div>
            </div>
            <TheFooter />
          </div>
        </div>
        <PopUpImage
          v-if="showingPopUp"
          :mainImage="mainImage"
          :imageTitle="comProduct.prodTitle"
          :allImages="allImages"
          v-on:closePopUp="showingPopUp = !showingPopUp"
        />
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
import { mapState, mapMutations } from 'vuex'

import TheFooter from '@/components/TheFooter.vue'
import QuantityInput from '@/components/QuantityInput.vue'
import PopUpImage from '@/components/PopUpImage.vue'

export default {
  components: {
    TheFooter,
    QuantityInput,
    PopUpImage
  },
  data () {
    return {
      product: {
        loading: false,
        data: null,
        error: null
      },
      quantity: 1,
      mainImage: Object,
      showingPopUp: false
    }
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      cmsData: state => state.collectionData.data
    }),
    comProduct () {
      return this.product.data
    },
    isImageClickable () {
      if (window.innerWidth > 768) {
        return true
      }
      return false
    },
    allImages () {
      return this.comProduct.additionalImages.map(obj => obj.filename)
    }
  },
  methods: {
    ...mapMutations([
      'setCartData'
    ]),
    fetchCollectionData (id) {
      this.product.loading = true
      const StoryblokClient = require('storyblok-js-client')
      const Storyblok = new StoryblokClient({
        accessToken: 'wANpEQEsMYGOwLxwXQ76Ggtt',
        cache: {
          clear: 'auto',
          type: 'memory'
        }
      })
      Storyblok.get('cdn/stories/collection', {
        token: 'V0xwB0q7VQvBe1IPBmmDyQtt'
      })
        .then(response => {
          const productData = response.data.story.content.body.find(product => product._uid === id)
          if (productData) {
            this.product.data = productData
            this.mainImage = { img: productData.additionalImages[0].filename, index: 0 }
            this.product.loading = false
          } else {
            this.$router.push({ name: 'notFound' })
          }
        }).catch(error => {
          console.log(error)
          this.error = true
          this.product.loading = false
        })
    },
    back () {
      this.$router.go(-1)
    },
    handleSetToCart () {
      this.setCartData({
        id: this.comProduct._uid,
        title: this.comProduct.prodTitle,
        price: this.comProduct.prodPrice,
        dimensions: this.comProduct.prodDimensions,
        weight: this.comProduct.prodWeight,
        quantity: this.quantity,
        image: this.comProduct.additionalImages[0].filename
      })
    },
    handleQuantity (quantity) {
      this.quantity = quantity
    },
    focusImage (index) {
      this.mainImage = { img: this.comProduct.additionalImages[index].filename, index: index }
    },
    handlePopUp () {
      if (this.isImageClickable) {
        this.showingPopUp = !this.showingPopUp
      }
    }
  },
  created () {
    this.fetchCollectionData(this.id)
  }
}
</script>

<style scoped lang="scss">
  .item-wrapper {
    @include flex-center;
    width: 100vw;
    height: 80vh;
    padding: 0 16%;
    &__img {
      width: 480px;
      margin-right: $marg-xlarge;
      cursor: pointer;
    }
    .additional-images-wrapper {
      display: flex;
      flex-direction: column;
      height: 480px;
      justify-content: space-between;
      margin: $marg-medium;
      flex-shrink: 1; /* default 1 */
      .additional-images {
        img {
          width: 140px;
          cursor: pointer;
        }
      }
    }
    &__text {
      display: flex;
      flex-direction: column;
      .item-title {
        font-size: $font-large;
        margin-bottom: $marg-small;
      }
      .item-price {
        font-weight: $font-normal;
        margin: $marg-xlarge 0 $marg-xxlarge 0;
        .price-info {
          font-size: $font-xxsmall;
        }
      }
      .item-info-title {
        margin-bottom: $marg-small;
        font-size: $font-xsmall;
      }
      .item-info {
        margin-bottom: $marg-xxsmall;
        font-size: $font-xsmall;
        letter-spacing: 1.1px;
      }
      .item-desc {
        font-weight: $font-regular;
        letter-spacing: 1px;
        line-height: 1.5;
        margin: $marg-xsmall 0 $marg-xxlarge 0;
      }
      .item-buttons {
        width: 100%;
        display: flex;
      }
    }
  }

  .bread-cramp {
    font-size: $font-xsmall;
    font-weight: $font-thin;
    margin: $marg-xlarge 0 $marg-small 0;
    a {
      text-decoration: none;
    }
  }

@media screen and (max-width: 768px) {
    .item-wrapper {
      @include flex-center-column;
      width: 100vw;
      height: 100%;
      padding: 0 $pad-large;
      &__img {
        width: 100vw;
        margin-right: 0;
        margin-bottom: $marg-medium;
      }
      .additional-images-wrapper {
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 100%;
        justify-content: space-evenly;
        margin: $marg-medium;
        // flex-shrink: 1; /* default 1 */
        .additional-images {
          width: 30%;
          img {
            width: 100%;
            cursor: pointer;
          }
        }
      }
      &__text {
        display: flex;
        flex-direction: column;
        .item-title {
          font-size: $font-large;
          margin-top: $marg-small;
        }
        .item-price {
          font-weight: $font-normal;
          margin: $marg-large 0 $marg-xxlarge 0;
          .price-info {
            font-size: $font-xxsmall;
          }
        }
        .item-info-title {
          margin-bottom: $marg-small;
          font-size: $font-xsmall;
        }
        .item-info {
          margin-bottom: $marg-xxsmall;
          font-size: $font-xsmall;
          letter-spacing: 1.1px;
        }
        .item-desc {
          font-weight: $font-thin;
          letter-spacing: 1px;
          line-height: 1.5;
          margin: $marg-xsmall 0 $marg-xlarge 0;
        }
        .item-buttons {
          width: 100%;
          display: flex;
          align-items: center;
        }
      }
  }
}
</style>
