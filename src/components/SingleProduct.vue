<template>
<div class="single-product">
    <router-link :to="{ name: 'ItemDetails', params: { id: product._uid } }" :key="$route.path">
      <div>
        <div class="image-container">
          <img :src="product.additionalImages[0].filename" :alt="product.prodTitle">
          <div v-if="showImageLoader" class="image-loader"></div>
            <div class="image-footer">
              <p class="image-footer__title">{{ product.prodTitle }}</p>
              <p class="image-footer__price medium">{{ product.prodPrice | currency }}</p>
            </div>
        </div>
      </div>
   </router-link>
  </div>
</template>

<script>
export default {
  name: 'SingleProduct',
  props: {
    product: Object
  },
  data () {
    return {
      showImageLoader: true
    }
  },
  mounted () {
    setTimeout(this.turnImageLoaderOff, 1500)
  },
  methods: {
    turnImageLoaderOff () {
      this.showImageLoader = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .single-product {
    margin: $marg-xlarge 0;
    .image-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0 $marg-large;
      position: relative;
      img {
        width: 320px;
        cursor: pointer;
      }
      .image-loader {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #dcdcdc 18%, #eeeeee 33%);
        background-size: 800px 104px;
        animation: pulse 1s linear infinite;
      }
      .image-footer {
        @include flex-center-column;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, .7);
        backdrop-filter: blur(5px);
        opacity: 0;
        cursor: pointer;
        transition: all .5s ease-in-out;
        &:hover {
          opacity: 1;
          transition: all .8s ease-in-out;
        }
        &__title {
          @include title;
          text-transform: uppercase;
        }
        &__price {
          @include title-price;
        }
      }
    }
}

@media screen and (max-width: 768px) {
  .single-product {
    .image-container {
      align-items: center;
      img {
        width: 90%;
      }
      .image-loader {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: $font-medium;
        color:rgba(33, 33, 33, .7);
        background-color: $white;
      }
      .image-footer {
        position: relative;
        width: 96%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        opacity: 1;
        background-color: transparent;
        backdrop-filter: none;
        padding: $pad-medium;
        &__title {
          @include title;
          margin: 0 $marg-large 0 0;
        }
        &__price {
          @include title-price;
        }
      }
    }
  }
}
</style>
