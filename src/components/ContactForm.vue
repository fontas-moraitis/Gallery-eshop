<template>
  <div class="form-wrapper">
    <h1 class="page-header mb-xxlarge">send request to artist</h1>
    <form
      action="https://formspree.io/FORM_ID"
      method="POST"
    >
    <label
      v-for="item in cartItems"
      :key="item.id"
      class="item"
    >
      <img :src="item.image" :alt="item.title" /><span>{{ item.title }}</span>x<span>{{ item.quantity }}</span>
    </label>
      <label>
        Your Name:
        <input type="text" name="name">
      </label>
      <label>
        Your Email:
        <input type="email" name="_replyto">
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button class="button" @click.prevent="cancelSubmition"> cancel request </button>
      <input type="submit" value="Send" class="button">
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContactForm',
  props: {
    totalPrice: Number
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart
    })
  },
  methods: {
    cancelSubmition () {
      this.$emit('cancel-submition')
    }
  }
}
</script>

<style scoped lang="scss">
  .form-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    overflow: hidden;
    background-color: $offwhite;
    @include flex-center-column;
    form {
    min-width: 720px;
    display: flex;
    flex-direction: column;
    label {
      margin: $marg-small;
    }
    input {
      margin: $marg-small;
      padding: 6px $pad-small;
      border: .5px $highlight solid;
      border-radius: 2px;
      background-color: $beize;
      // box-shadow: inset 1px 1px 2px rgba(125, 125, 125, .2), inset -2px -2px 3px rgba(255, 255, 255, .9);
      &:focus {
        outline: none;
      }
      button: {
        margin-top: $marg-xlarge;
      }
    }
  }

  .item {
      display: flex;
      max-width: 240px;
      justify-content: space-between;
      align-items: center;
      img {
        width: 60px;
      }
    }
  }
</style>
