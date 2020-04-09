<template>
  <div class="app-footer">
    <div class="app-footer__container">
      <div class="social-container">
        <p class="social-title mb-medium medium">find us on social media:</p>
        <a class="insta-link" href="https://www.instagram.com/stavrosperakis/" target="blank">instagram</a>
      </div>
      <div class="links-container">
        <router-link class="router-link" :to="{ name: 'Home' }">home</router-link>
        <router-link class="router-link" :to="{ name: 'Collection' }">shop</router-link>
        <router-link class="router-link" :to="{ name: 'About'}">about</router-link>
      </div>
      <div class="copyright">stavros perakis copyright © 2020 | created by <a class="medium" href="http://www.fontas.me/" target="blank">fontas</a></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .app-footer {
    width: 100vw;
    height: 200px;
    background: #211C1C;
    color: #fff;
    padding: $pad-xxlarge 0;
    margin-top: $marg-xxlarge;
    font-size: $font-xxsmall;
    font-weight: 100;
    letter-spacing: 1.1px;
    &__container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .social-container {
        @include flex-center-column;
        .insta-icon {
          width: 16px;
          height: auto;
          margin-right: $marg-xsmall;
        }
        .insta-link {
          text-decoration: none;
          color: #fff;
          font-size: $font-small;
          &:hover {
            font-weight: $font-thick;
          }
        }
      }
      .links-container {
        display: flex;
        justify-content: space-around;
        border-top: .5px solid $white;
        padding: $pad-medium 0;
        .router-link {
          color: $white;
          margin: 0 $marg-large;
        }
      }
    .copyright {
      font-size: $font-xxxsmall;
      font-weight: $font-thin;
      letter-spacing: 1px;
      display: flex;
      a {
       margin: 0 6px;
       color: $white;
      }
    }
  }
}

@media screen and (max-width: 520px) {
  .app-footer {
    margin-top: $marg-medium;
  }
}
</style>
