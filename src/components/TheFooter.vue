<template>
  <div class="app-footer">
    <div class="app-footer__container">
      <div class="social-container">
        <a class="medium" href="https://www.instagram.com/stavrosperakis/" target="blank"><img src="@/assets/instagram.svg" />instagram</a>
      </div>
      <div class="links-container">
        <router-link class="router-link" :to="{ name: 'Home' }">home</router-link>
        <router-link class="router-link" :to="{ name: 'Collection' }">shop</router-link>
        <router-link class="router-link" :to="{ name: 'About'}">about</router-link>
      </div>
      <div class="copyright">stavros perakis copyright © 2020 | created with &#x2764; by <a class="medium" href="http://www.fontas.me/" target="blank">fontas</a></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .app-footer {
    width: 100vw;
    height: 140px;
    background-color: $black;
    color: $white;
    padding: $pad-xxlarge 0;
    margin-top: $marg-xxlarge;
    font-size: $font-xxsmall;
    a {
      text-decoration: none;
      color: inherit;
      margin-right: $marg-small;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 16px;
        height: auto;
        margin-right: $marg-xsmall;
      }
    }
    .social-container {
    }
    .links-container {
      display: flex;
      justify-content: space-between;
      font-weight: $font-thin;
    }
    &__container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }
    .copyright {
      font-size: $font-xxxsmall;
      font-weight: $font-thin;
      letter-spacing: 1px;
      display: flex;
      a {
       margin: 0 6px;
      }
    }
  }
</style>
