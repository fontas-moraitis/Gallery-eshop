<template>
  <div>
    <main class="wrapper not-found">
      <div class="container container--column">
        <h1 class="not-found__text">the page you were looking for was not found</h1>
        <router-link :to="{ name: 'Home' }"><button class="button button--light">click here to return home</button></router-link>
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  .not-found {
    width: 100vw;
    height: 100vh;
    background-color: $beize;
    padding-top: 10%;
    &__text {
      @include title-special;
      max-width: 980px;
      margin-bottom: $marg-xxlarge;
      line-height: 1.2;
    }
  }
</style>
