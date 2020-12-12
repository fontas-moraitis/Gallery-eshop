<template>
  <div class="form-wrapper">
    <h1 class="page-header mb-xlarge">send request to artist</h1>
    <form
      id="contactForm"
      v-outside-click="{exclude: ['outside-click-exclude'], handler: cancelSubmition}"
      action="https://formspree.io/f/maylpywn"
      method="POST"
    >
      <label
        v-for="item in cartItems"
        :key="item.id"
        class="item"
        name="upload"
      >
        <img :src="item.image" :alt="item.title" /><span>{{ item.title }}</span><span class="number">{{ item.quantity }}</span>
      </label>
      <label class="total medium number">total: {{ totalPrice | currency }}</label>
      <label>
        <input type="text" name="firstName" placeholder="First name*" maxlength="30" required>
      </label>
      <label>
        <input type="text" name="lastName" placeholder="Last name*" maxlength="30" required>
      </label>
      <label>
        <input type="email" name="_replyto" placeholder="Your email*" required>
      </label>
      <label>
        <input type="address" name="address" placeholder="Delivery address*" required>
      </label>
      <label>
        <textarea name="message" placeholder="Leave a message for the artist"></textarea>
      </label>
      <input type="submit" value="Send Request" class="input-button input-button--dark">
      <input type="button" value="Cancel Request" @click.prevent="cancelSubmition" class="input-button">
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ContactForm',
  props: {
    totalPrice: {
      type: Number,
      required: true
    }
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: 5;
    background: rgba(240, 240, 240, .8);
    backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: $pad-medium;
    form {
    min-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    background: $white;
    padding: $pad-xlarge;
    label {
      margin: $marg-small 0;
      width: 90%;
      text-align: center;
    }
    input {
      width: 90%;
      padding: 6px $pad-small;
      border: .5px $black solid;
      border-radius: 2px;
      cursor: pointer;
      background-color: $beize;
      color:#8a97a0;
      -webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
      box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
      &:focus {
        outline: none;
      }
    }
    textarea {
      width: 92%;
      min-height: 100px;
    }
  }

  .item {
    display: flex;
    width: 70%;
    justify-content: space-between;
    align-items: center;
    img {
      width: 40px;
    }
  }
  .total {
    text-align: center;
    padding: $pad-small 0;
    border-bottom: 1px solid $black;
  }
  .input-button {
    border: 1px solid $black;
    color: $black;
    background: $white;
    margin: $marg-small 0;
  }
  .input-button--dark {
    color: $white;
    background: $black;
  }
}

@media screen and (max-width: 768px) {
  .form-wrapper {
    .page-header {
      margin-bottom: $marg-xxlarge;
    }
    form {
      width: 90%;
      label {
        width: 45%;
      }
      input {
        width: auto;
      }
      textarea {
        width: 92%;
        min-height: 100px;
        border: 1px solid $highlight;
      }
    }
    .item {
      display: flex;
      width: 50vw;
      justify-content: space-between;
      align-items: center;
      img {
        width: 30px;
      }
    }
  }
}
</style>
