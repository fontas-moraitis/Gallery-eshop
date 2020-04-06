<template>
  <div>
    <div class="wrapper not-found">
      <div class="container container--column">
        <p class="not-found__text">the page you were looking for was not found</p>
        <router-link :to="{ name: 'Home' }"><p>click here to return home</p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
  .not-found {
    width: 100vw;
    height: 100vh;
    background-color: #efeeee;
    padding-top: 10%;
    &__text {
      @include title-special;
      max-width: 500px;
      margin-bottom: $marg-medium;
      line-height: 1.2;
    }
  }
</style>
