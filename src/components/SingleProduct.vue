<template>
  <div class="single-product">
    <div>
      <div class="image-container">
        <img :src="product.additionalImages[0].filename" :alt="product.prodTitle">
        <div v-if="showImageLoader" class="image-loader">loading...</div>
        <router-link :to="{ name: 'ItemDetails', params: { id: product._uid } }" :key="$route.path">
          <div class="image-footer">
            <p class="image-footer__title">{{ product.prodTitle }}</p>
            <p class="image-footer__price medium">{{ product.prodPrice | currency }}</p>
          </div>
        </router-link>
      </div>
    </div>
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
    setTimeout(this.turnImageLoaderOff, 800)
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
      width: 280px;
      cursor: pointer;
    }
    .image-loader {
      width: 280px;
      height: 280px;
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
      @include flex-center-column;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .7);
      backdrop-filter: blur(5px);
      opacity: 0;
      cursor: pointer;
      &:hover {
        opacity: 1;
        border: 1px solid $white;
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

@media screen and (max-width: 750px) {
  .image-container {
    img {
      width: 320px;
    }
  }
}
</style>
