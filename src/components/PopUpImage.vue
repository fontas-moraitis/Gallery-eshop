<template>
    <!-- Image poping up when clicked and disappears when clicked again -->
    <div
      @click.prevent="closePopUp"
      class="pop-up-image"
    >
      <img :src="mainImage" :alt="imageTitle">
      <p class="pop-up-image__image-title">{{imageTitle}}</p>
    </div>
</template>

<script>
export default {
  name: 'PopUpImage',
  props: {
    mainImage: {
      type: String,
      required: true
    },
    imageTitle: {
      type: String,
      required: false
    }
  },
  methods: {
    closePopUp () {
      this.$emit('closePopUp')
    }
  }
}
</script>

<style scoped lang="scss">
  // pop-up image positioned in the middle of the screen
  .pop-up-image {
    @include flex-center-column;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(255, 255, 255, .6);
    backdrop-filter: blur(5px);
    cursor: pointer;
    img {
      width: 800px
    }
    &__image-title {
      @include title;
      margin-top: $marg-medium;
    }
  }
</style>
