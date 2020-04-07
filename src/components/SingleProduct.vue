<template>
  <div class="single-product">
    <div class="container">
      <div class="image-container">
        <router-link :to="{ name: 'ItemDetails', params: { id: product._uid } }" :key="$route.path"><img :src="product.image" :alt="product.prodTitle"></router-link>
        <div class="image-footer ghost">
          <p class="image-footer__title">{{ product.prodTitle }}</p>
          <p class="image-footer__price medium">{{ product.prodPrice | currency }}</p>
        </div>
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
  .image-container > a > img {
     width: 320px;
     margin-bottom: $marg-small;
     cursor: pointer;
  }

  .image-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 $marg-large;
    .image-footer {
      width: 100%;
      border-top: .7px solid lightgrey;
      @include flex-between;
      padding: $pad-xsmall 0;
      &__title {
        @include title;
        text-transform: uppercase;
      }
      &__price {
        @include title-price;
      }
    }
  }
</style>
