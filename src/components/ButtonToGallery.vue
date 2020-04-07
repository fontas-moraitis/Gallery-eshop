<template>
  <div>
    <button class="button button--dark" @click="goBack">add some items</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      return this.$router.push({ name: 'Collection' })
    }
  }
}
</script>
