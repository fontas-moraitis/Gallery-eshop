<template>
  <input
   min="1"
   max="10"
   class="quantity-input"
   type="number"
   :value="value"
   @input="$emit('input', Number($event.target.value))"
   >
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .quantity-input {
    height: 36px;
    width: 32px;
    border: 1px solid $black;
    text-align: center;
    background-color: $beize;
    &:focus {
      outline: none;
    }
  }
</style>
