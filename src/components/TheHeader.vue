<template>
        <div class="app-header" :class="[currentPage === 'Home' ? 'light-theme' : 'dark-theme']">
          <router-link :to="{ name: 'Home' }" class="app-header__logo">stavros perakis</router-link>
          <div class="app-header__links">
            <router-link class="router-link" :to="{ name: 'Collection' }">shop</router-link>
            <router-link class="router-link" :to="{ name: 'About'}">about</router-link>
            <router-link class="router-link" :to="{ name: 'Cart'}">
              cart
              <div :key="totalCart" class="cart-icon shake" >
                <div class="cart-svg">
                  <svg viewBox="0 -13 456.75885 456" xmlns="http://www.w3.org/2000/svg"><g :class="[currentPage === 'Home' ? 'cart-icon-group' : '']">
                <path d="m150.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"/><path d="m446.855469 94.035156h-353.101563l-7.199218-40.300781c-4.4375-24.808594-23.882813-44.214844-48.699219-48.601563l-26.101563-4.597656c-5.441406-.96875-10.632812 2.660156-11.601562 8.097656-.964844 5.441407 2.660156 10.632813 8.101562 11.601563l26.199219 4.597656c16.53125 2.929688 29.472656 15.871094 32.402344 32.402344l35.398437 199.699219c4.179688 23.894531 24.941406 41.324218 49.199219 41.300781h210c22.0625.066406 41.546875-14.375 47.902344-35.5l47-155.800781c.871093-3.039063.320312-6.3125-1.5-8.898438-1.902344-2.503906-4.859375-3.980468-8-4zm-56.601563 162.796875c-3.773437 12.6875-15.464844 21.367188-28.699218 21.300781h-210c-14.566407.039063-27.035157-10.441406-29.5-24.800781l-24.699219-139.398437h336.097656zm0 0"/><path d="m360.355469 322.332031c-30.046875 0-54.402344 24.355469-54.402344 54.402344 0 30.042969 24.355469 54.398437 54.402344 54.398437 30.042969 0 54.398437-24.355468 54.398437-54.398437-.03125-30.03125-24.367187-54.371094-54.398437-54.402344zm0 88.800781c-19 0-34.402344-15.402343-34.402344-34.398437 0-19 15.402344-34.402344 34.402344-34.402344 18.996093 0 34.398437 15.402344 34.398437 34.402344 0 18.996094-15.402344 34.398437-34.398437 34.398437zm0 0"/>
                 </g>
                 </svg>
                </div>
                <div v-if="totalCart > 0" class="cart-number">{{totalCart}}</div>
              </div>
            </router-link>
          </div>
      </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TheHeader',
  computed: {
    ...mapGetters([
      'totalCart'
    ]),
    currentPage () {
      return this.$route.name
    }
  }
}
</script>

<style scoped lang="scss">
  .app-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: $header-height;
      @include flex-between;
      z-index: 2 !important;
      padding: $pad-xxlarge $pad-xxxlarge $pad-xxlarge $pad-xxlarge;
      &__logo {
        @include title-standard;
        color: inherit;
        letter-spacing: 1.8px;
        text-transform: uppercase;
      }
      &__links {
        display: flex;
        justify-content: center;
        align-items: center;
        .router-link {
          display: flex;
          @include title-standard;
          margin-left: $marg-large;
          color: inherit;
        }
      }
  }

  .cart-icon {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .cart-svg {
      width: 16px;
      height: 16px;
      margin-left: $marg-xsmall;
    }
    .cart-number {
      font-size: 10px;
      position: absolute;
      top: -14px;
      right: -8px;
      z-index: 3;
      width: 16px;
      height: 16px;
      border: .8px solid black;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .cart-icon-group {
    fill: $white;
  }

  @media screen and (max-width: 720px) {
    .app-header {
      padding: $pad-large;
      &__logo {
        font-size: $font-small;
        letter-spacing: 1.4px;
      }
      &__links {
        .router-link {
          margin-left: $marg-medium;
        }
    }
  }
}
</style>
