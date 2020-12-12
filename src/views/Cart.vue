<template>
  <div class="cart-wrapper">
    <!-- if cart is empty show: -->
    <div class="cart-wrapper__empty-cart" v-if="cartItems.length < 1">
      <h1 class="page-header">your bag is empty</h1>
      <ButtonToGallery />
    </div>
    <!-- otherwise show items -->
    <div class="cart-wrapper__cart" v-else>
      <h1 class="page-header self-positioned">your bag contains:</h1>
      <div class="bag-row heavy">
        <p>Product</p>
        <p class="mobile-hide">Details</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Subtotal</p>
      </div>
      <div
        v-for="(product, index) in cartItems"
        :key="index"
        class="bag-row bag-row-colored"
      >
        <div class="image-wrapper"><img :src="product.image" :alt="product.title"></div>
        <div><span class="item-info medium">{{product.title}}</span><span class="numbers">{{product.dimensions}} cm </span><span class="numbers">{{product.weight}} kg</span></div>
        <QuantityInput
          :value="product.quantity"
          @input="handleQuantity($event, product.id)"
         />
        <div class="numbers">{{product.price | currency}}</div>
        <div class="medium numbers">{{ priceByQuantity(product.quantity, product.price) | currency }}</div>
        <a @click.prevent="removeItemFromCart(product.id)">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </a>
      </div>
      <div class="bag-row heavy">
        <p class="total-text">total: </p>
        <p class="total-price numbers">{{ totalPrice | currency }}</p>
      </div>
      <button class="button button--dark outside-click-exclude" @click="sendRequest">send your request</button>
      <ContactForm
       v-if="showContactForm"
       :totalPrice="totalPrice"
       @cancel-submition="closeContactForm"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import ButtonToGallery from '@/components/ButtonToGallery.vue'
import QuantityInput from '@/components/QuantityInput.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'Cart',
  components: {
    ButtonToGallery,
    QuantityInput,
    ContactForm
  },
  data () {
    return {
      showContactForm: false
    }
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart
    }),
    totalPrice () {
      const priceArray = []
      this.cartItems.forEach(product => priceArray.push(parseInt(product.price * product.quantity)))
      return priceArray.reduce((a, b) => a + b, 0)
    }
  },
  methods: {
    ...mapMutations([
      'removeItemFromCart',
      'updateQuantity'
    ]),
    priceByQuantity (quantity, price) {
      return quantity * price
    },
    handleQuantity (arg1, arg2) {
      const payload = { quantity: arg1, id: arg2 }
      this.updateQuantity(payload)
    },
    sendRequest () {
      this.showContactForm = true
      document.documentElement.classList.add('overflow-hidden')
    },
    closeContactForm () {
      this.showContactForm = false
      document.documentElement.classList.remove('overflow-hidden')
    }
  }
}
</script>

<style scoped lang="scss">
  .page-header {
    margin-bottom: $marg-xlarge;
  }
  .cart-wrapper {
    padding: 100px 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $beize;
    &__empty-cart {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      p {
        margin-bottom: $marg-xxlarge;
      }
    }
    &__cart {
      display: flex;
      flex-direction: column;
      padding: 0 $pad-medium;
      .self-positioned {
        text-align: start;
      }
      .bag-row {
        max-width: 1400px;
        min-height: 100px;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: repeat(2, 1fr) .5fr repeat(2, 1fr) .2fr;
        padding: $pad-xlarge;
        justify-items: center;
        align-items: center;
        border-bottom: 1px solid $beize;
        line-height: 1.5;
        font-size: $font-xxsmall;
        .item-info {
          margin: 0 $marg-xxsmall;
        }
        .image-wrapper {
          img {
            width: 80px;
          }
        }
        .total-text {
          grid-column: 4 / span 1;
        }
        .total-price {
          grid-column: 5 / span 1;
        }
        a {
          cursor: pointer;
        }
      }
      .bag-row-colored {
        background-color: #efeeee;
      }
    }
  }

@media screen and (max-width: 1366px) {
  .image-wrapper {
    display: none;
  }
  .cart-wrapper {
    font-size: $font-xxxsmall;
    &__empty-cart {
      padding: $pad-xsmall;
    }
    &__cart {
      .bag-row {
        padding: $pad-small;
        border-bottom: 1px solid $beize;
        line-height: 1;
        font-size: $font-xxxsmall;
        grid-template-columns: 1fr .5fr 1fr 1fr .4fr;
        .item-info {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 0;
        }
        .total-text {
          grid-column: 3 / span 1;
          font-size: $font-xxxsmall;
        }
        .total-price {
          grid-column: 4 / span 1;
          font-size: $font-xxxsmall;
        }
      }
    }
  }
  .mobile-hide {
    display: none;
  }
}
</style>
