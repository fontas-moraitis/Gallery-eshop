<template>
  <input
   min="1"
   max="10"
   maxlength="1"
   class="quantity-input numbers"
   type="text"
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
      outline: 2px solid $highlight;
    }
  }

@media screen and (max-width: 768px) {
  .quantity-input {
    height: 20px;
    width: 20px;
  }
}
</style>
