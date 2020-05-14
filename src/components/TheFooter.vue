<template>
  <div class="app-footer">
    <div class="app-footer__container">
      <div class="social-container">
        <p class="social-title mb-medium medium">follow us on social media:</p>
        <a href="https://www.instagram.com/stavrosperakis/" target="blank" class="insta-link">instagram</a>
      </div>
      <p class="medium">terms & conditions</p>
      <router-link class="router-link" :to="{ name: 'Terms'}">All sales are final. Click here to read through all the terms and conditions.</router-link>
      <div class="copyright">stavros perakis copyright © 2020 | created by <a class="medium" href="http://www.fontas.me/" target="blank">fontas</a></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .app-footer {
    width: 100vw;
    height: 220px;
    position: absolute;
    bottom: -220px;
    background: $beize;
    color: $black;
    padding: $pad-xlarge 0;
    font-size: $font-xxsmall;
    font-weight: $font-normal;
    border-top: 2px solid white;
    &__container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      font-size: $font-xxsmall;
      .social-container {
        @include flex-center-column;
        justify-content: space-evenly;
        .insta-link {
          text-decoration: none;
          color: $black;
          font-size: $font-small;
          margin: $marg-small 0;
          &:hover {
            font-weight: $font-thick;
          }
        }
      }
    .copyright {
      font-size: $font-xxxsmall;
      font-weight: $font-regular;
      letter-spacing: 1px;
      display: flex;
      a {
       margin: 0 $marg-xsmall;
       color: $black;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .app-footer {
    margin-top: $marg-xxlarge;
    &__container {
      font-size: $font-xxxsmall;
      text-align: center;
      .social-container {
        .insta-link {
          font-size: $font-xxxsmall;
        }
      }
    }
  }
}
</style>
