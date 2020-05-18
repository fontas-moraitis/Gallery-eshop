<template>
    <!-- Image poping up when clicked and disappears when clicked again -->
    <div
      class="pop-up-image"
    >
      <img @click.prevent="goToPrevImg" src="@/assets/left--black.svg" alt="arrow pointing left" class="arrow-icon previous">
      <div class="image-wrapper">
        <div @click.prevent="closePopUp" class="close-button-wrapper"><img src="@/assets/x.svg" alt="close-button"></div>
          <img :src="currentImage" :alt="imageTitle" class="image-wrapper__image">
      </div>
      <img @click.prevent="goToNextImg" src="@/assets/right--black.svg" alt="" class="arrow-icon next">
    </div>
</template>

<script>
export default {
  name: 'PopUpImage',
  props: {
    mainImage: {
      type: Object,
      required: true
    },
    imageTitle: {
      type: String,
      required: false
    },
    allImages: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      index: null,
      currentImage: null
    }
  },
  methods: {
    closePopUp () {
      this.$emit('closePopUp')
    },
    goToPrevImg () {
      if (this.index >= 0) {
        this.index--
      }
      if (this.index < 0) {
        this.index = this.allImages.length - 1
      }
    },
    goToNextImg () {
      if (this.index <= this.allImages.length - 1) {
        this.index++
      }
      if (this.index > this.allImages.length - 1) {
        this.index = 0
      }
    }
  },
  created () {
    this.currentImage = this.mainImage.img
    this.index = this.mainImage.index
  },
  watch: {
    index: function (index) {
      this.currentImage = this.allImages[this.index]
    }
  }
}
</script>

<style scoped lang="scss">
  // pop-up image positioned in the middle of the screen
  .pop-up-image {
    @include flex-center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: rgba(255, 255, 255, .6);
    backdrop-filter: blur(5px);
    .image-wrapper {
      @include flex-center-column;
      .close-button-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: $marg-medium;
        cursor: pointer;
      }
      &__image {
        height: 85vh;
      }
    }
    &__image-title {
      @include title;
      margin-top: $marg-medium;
    }
    .arrow-icon {
      width: 24px;
      margin: 0 $marg-medium;
      cursor: pointer;
    }
  }
</style>
