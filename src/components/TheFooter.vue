<template>
  <div class="app-footer">
    <div class="app-footer__container">
      <div class="social-container">
        <a href="https://www.instagram.com/stavrosperakis/" target="blank" class="insta-link">
          <p class="social-title">
            <span class="mobile-hide">follow us on</span>
            <svg viewBox="0 0 512.00096 512.00096" xmlns="http://www.w3.org/2000/svg" stroke-width="1" width="18">
              <path d="m373.40625 0h-234.8125c-76.421875 0-138.59375 62.171875-138.59375 138.59375v234.816406c0 76.417969 62.171875 138.589844 138.59375 138.589844h234.816406c76.417969 0 138.589844-62.171875 138.589844-138.589844v-234.816406c0-76.421875-62.171875-138.59375-138.59375-138.59375zm108.578125 373.410156c0 59.867188-48.707031 108.574219-108.578125 108.574219h-234.8125c-59.871094 0-108.578125-48.707031-108.578125-108.574219v-234.816406c0-59.871094 48.707031-108.578125 108.578125-108.578125h234.816406c59.867188 0 108.574219 48.707031 108.574219 108.578125zm0 0"/>
              <path d="m256 116.003906c-77.195312 0-139.996094 62.800782-139.996094 139.996094s62.800782 139.996094 139.996094 139.996094 139.996094-62.800782 139.996094-139.996094-62.800782-139.996094-139.996094-139.996094zm0 249.976563c-60.640625 0-109.980469-49.335938-109.980469-109.980469 0-60.640625 49.339844-109.980469 109.980469-109.980469 60.644531 0 109.980469 49.339844 109.980469 109.980469 0 60.644531-49.335938 109.980469-109.980469 109.980469zm0 0"/>
              <path d="m399.34375 66.285156c-22.8125 0-41.367188 18.558594-41.367188 41.367188 0 22.8125 18.554688 41.371094 41.367188 41.371094s41.371094-18.558594 41.371094-41.371094-18.558594-41.367188-41.371094-41.367188zm0 52.71875c-6.257812 0-11.351562-5.09375-11.351562-11.351562 0-6.261719 5.09375-11.351563 11.351562-11.351563 6.261719 0 11.355469 5.089844 11.355469 11.351563 0 6.257812-5.09375 11.351562-11.355469 11.351562zm0 0"/>
            </svg>
          </p>
        </a>
      </div>
      <div class="copyright">
        <p>stavros perakis copyright © 2020</p>
        <router-link class="router-link terms-link" :to="{ name: 'Terms'}">terms and conditions</router-link>
        <p>made by <a class="made-by-link" href="http://www.fontas.me/" target="blank">Fontas Moraitis</a></p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .app-footer {
    @include flex-center;
    width: 100vw;
    height: 60px;
    position: absolute;
    bottom: -60px;
    background: $beize;
    color: $black;
    padding: $pad-xlarge 0;
    font-size: $font-xxsmall;
    font-weight: $font-normal;
    border-top: 1px solid white;
    box-shadow: inset 0 4px 6px rgba(230, 230, 230, .5);
    &__container {
      max-width: 1200px;
      height: 100%;
      display: flex;
      font-size: $font-xxsmall;
      .social-container {
        @include flex-center;
        justify-content: space-evenly;
        margin-right: $marg-medium;
        .social-title {
          @include flex-center;
          svg {
            margin-left: $marg-small;
          }
        }
      }
    .copyright {
      font-size: $font-xxxsmall;
      font-weight: $font-regular;
      letter-spacing: 1px;
      display: flex;
      .terms-link {
        color: $black;
        text-decoration: underline;
      }
      .made-by-link {
        font-weight: 200;
      }
      a {
       margin: 0 $marg-xxxsmall;
       color: $black;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .app-footer {
    margin-top: $marg-xxlarge;
    padding: $pad-xsmall 0;
    height: 120px;
    bottom: -120px;
    &__container {
      @include flex-center-column;
      font-size: $font-xxxsmall;
      text-align: center;
      padding: 0;
      .social-title {
        svg {
          width: 24px;
          margin-top: $marg-small;
        }
      }
      .social-container {
        @include flex-center-column;
        margin-bottom: $marg-small;
        .mobile-hide {
          display: none;
        }
        .insta-link {
          font-size: $font-xxxsmall;
        }
      }
      .copyright {
        font-size: $font-xxxsmall;
        font-weight: $font-regular;
        letter-spacing: .8px;
        display: flex;
        flex-direction: column;
        margin-bottom: $marg-xsmall;
        .terms-link {
          margin-bottom: $marg-xsmall;
        }
        a {
        margin: $marg-xsmall 0;
        color: $black;
        }
     }
    }
  }
}
</style>
