<template>
  <div class="terms-container">
    <div class="terms-wrapper">
      <div class="title">Terms and Conditions</div>
      <div class="content">
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p class="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .terms-container {
    @include flex-center;
    width: 100vw;
    height: 100vh;
    background-color: $beize;
    .terms-wrapper {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      .title {
        @include title-special;
        text-align: start;
        margin-bottom: $marg-xxlarge;
      }
      .text {
        text-align: start;
      }
    }
  }
</style>
