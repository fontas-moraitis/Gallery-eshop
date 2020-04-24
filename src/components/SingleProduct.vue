<template>
  <div class="single-product">
    <div>
      <div class="image-container">
        <img :src="product.image" :alt="product.prodTitle">
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
        border-top: 1px solid white;
        border-left: 1px solid white;
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
