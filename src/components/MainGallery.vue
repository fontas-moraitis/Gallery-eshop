<template>
  <div class="main-gallery wrapper">
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
     <p class="subtitle">{{cmsMainGallery[currentIndex].subTitle}}</p>
   </div>
   <img src="@/assets/left.svg" alt="arrow pointing left" @click="imageFlippingBwd" class="previous" />
   <img src="@/assets/right.svg" alt="arrow pointing right" @click="imageFlippingFwd" class="next" />
   <div class="image-indicator">
     <div v-for="(circle, index) in cmsMainGallery.length" :key="index" class="circle" :class="[index == currentIndex ? 'circle--filled' : '']"></div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'MainGallery',
  props: {
    cmsMainGallery: {
      type: Array,
      required: true
    },
    isKeyboardNav: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  created () {
    setInterval(function () {
      this.imageFlippingFwd()
    }.bind(this), 6000)
  },
  mounted () {
    document.addEventListener('keydown', event => this.keyboardNavigation())
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
    },
    keyboardNavigation () {
      if (this.isKeyboardNav) {
        if (event.keyCode === 39) {
          console.log('right')
          this.imageFlippingFwd()
        } else if (event.keyCode === 37) {
          console.log('left')
          this.imageFlippingBwd()
        }
      } else {
        document.removeEventListener('keydown', event => this.keyboardNavigation())
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
      filter: brightness(.80);
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
    animation: ghost--no-motion 4000ms ease-in-out;
  }
  .title {
    @include title-special;
    color: $white;
    margin-bottom: $marg-small;
  }
  .subtitle {
    @include subtitle-special;
    color: $white;
  }
  .next {
    position: fixed;
    top: 50%;
    right: 12px;
    width: 30px;
    height: 30px;
    z-index: 10;
    cursor: pointer;
    opacity: .5;
  }
  .previous {
    position: fixed;
    top: 50%;
    left: 12px;
    width: 30px;
    height: 30px;
    z-index: 10;
    cursor: pointer;
    opacity: .5;
  }
  .image-indicator {
    @include flex-between;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    height: 30px;
    z-index: 10;
    padding: $pad-small;
    .circle {
      width: 9px;
      height: 9px;
      border: 1px solid white;
      border-radius: 50%;
      margin: 0 $marg-xxxsmall;
    }
    .circle--filled {
      background: $white;
    }
  }
}

@media screen and (max-width: 768px) {
  .main-gallery {
    &__hero-text {
      max-width: 80%;
      top: 80%;
      .title {
        font-size: $font-normal;
        font-weight: $font-thick;
      }
      .subtitle {
        font-size: $font-xxsmall;
      }
    }
    .next, .previous {
    display: none;
  }
    .image-indicator {
      .circle {
        width: 7px;
        height: 7px;
      }
    }
  }
}
</style>
