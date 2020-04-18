<template>
  <div class="main-gallery wrapper" v-on:keydown.right="imageFlippingFwd">
   <div class="main-gallery__hero-img wrapper">
     <img
      v-for="(item, index) in cmsMainGallery"
      :key="index"
      :class="[index === currentIndex ? 'active-image' : '']"
      :src="item.image"
      alt="main gallery img"
     />
   </div>
   <div class="main-gallery__hero-text">
     <p class="title">{{cmsMainGallery[currentIndex].title}}</p>
     <p class="subTitle">{{cmsMainGallery[currentIndex].subTitle}}</p>
   </div>
   <img src="@/assets/left.svg" alt="arrow pointing left" @click="imageFlippingBwd" class="previous" />
   <img src="@/assets/right.svg" alt="arrow pointing right" @click="imageFlippingFwd" class="next" />
  </div>
</template>

<script>
export default {
  name: 'MainGallery',
  props: {
    cmsMainGallery: Array
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  created () {
    setInterval(function () {
      this.imageFlippingFwd()
    }.bind(this), 8000)
  },
  methods: {
    imageFlippingFwd () {
      if (this.currentIndex < (this.cmsMainGallery.length - 1)) {
        this.currentIndex++
      } else if (this.currentIndex === (this.cmsMainGallery.length - 1)) {
        this.currentIndex = 0
      }
    },
    imageFlippingBwd () {
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else if (this.currentIndex === 0) {
        this.currentIndex = this.cmsMainGallery.length - 1
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .main-gallery {
    width: 100vw;
    height: 100vh;
    &__hero-img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      img {
      object-fit: cover;
      object-position: 0 0;
      position: absolute;
      min-height: 100%;
      min-width: 1024px;
      width: 100%;
      height: 100%;
      visibility: hidden;
      opacity: 0;
      transition: all 2000ms ease;
      animation: sliding 25s linear infinite;
      filter: brightness(.85);
    }
  }
  &__hero-text {
    @include flex-center-column;
    position: fixed;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    z-index: 4;
    max-width: 520px;
  }
  .title {
    @include title-special;
    color: $white;
    margin-bottom: $marg-small;
  }
  .subTitle {
    @include subtitle-special;
    color: $white;
  }
  .next {
    position: fixed;
    top: 50%;
    right: 0;
    width: 50px;
    height: 50px;
    z-index: 10;
    cursor: pointer;
  }
  .previous {
    position: fixed;
    top: 50%;
    left: 0;
    width: 50px;
    height: 50px;
    z-index: 10;
    cursor: pointer;
  }
}
</style>
