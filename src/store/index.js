import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    homeData: {
      loading: false,
      data: null,
      error: null
    },
    collectionData: {
      loading: false,
      data: null,
      error: null
    },
    aboutData: {
      loading: false,
      data: null,
      error: null
    },
    workshopData: {
      loading: false,
      data: null,
      error: null
    },
    cart: []
  },
  getters: {
    totalCart: state => {
      const allCartItems = []
      state.cart.forEach(prod => allCartItems.push(prod.quantity))
      return allCartItems.reduce((a, b) => a + b, 0)
    },
    allProducts: state => {
      return state.collectionData.data
    }
  },
  mutations: {
    beforeLoadHomeData: (state) => {
      state.homeData.loading = true
    },
    setHomeData: (state, payload) => {
      state.homeData.loading = false
      state.homeData.data = payload
    },
    homeDataFailed: (state, payload) => {
      state.homeData.loading = false
      state.homeData.error = true
    },
    beforeLoadCollectionData: (state) => {
      state.collectionData.loading = true
    },
    setCollectionData: (state, payload) => {
      state.collectionData.data = payload
      state.collectionData.loading = false
    },
    collectionDataFailed: (state) => {
      state.collectionData.loading = false
      state.collectionData.error = true
    },
    beforeLoadAboutData: (state) => {
      state.aboutData.loading = true
    },
    setAboutData: (state, payload) => {
      state.aboutData.data = payload
      state.aboutData.loading = false
    },
    aboutDataFailed: (state) => {
      state.aboutData.loading = false
      state.aboutData.error = true
    },
    beforeLoadWorkshopData: (state) => {
      state.workshopData.loading = true
    },
    setWorkshopData: (state, payload) => {
      state.workshopData.loading = false
      state.workshopData.data = payload
    },
    workshopDataFailed: (state) => {
      state.workshopData.loading = false
      state.workshopData.error = true
    },
    setCartData: (state, payload) => {
      const currProduct = state.cart.find(prod => prod.id === payload.id)
      if (currProduct) {
        currProduct.quantity += payload.quantity
      } else {
        state.cart.push(payload)
      }
    },
    removeItemFromCart: (state, payload) => {
      state.cart = state.cart.filter(product => product.id !== payload)
    },
    updateQuantity: (state, payload) => {
      const updatedProduct = state.cart.find(prod => prod.id === payload.id)
      updatedProduct.quantity = payload.quantity
    }
  },
  actions: {
    loadHomeData ({ commit }) {
      commit('beforeLoadHomeData')
      const StoryblokClient = require('storyblok-js-client')
      const Storyblok = new StoryblokClient({
        accessToken: 'wANpEQEsMYGOwLxwXQ76Ggtt',
        cache: {
          clear: 'auto',
          type: 'memory'
        }
      })
      Storyblok.get('cdn/stories/home', {
        token: 'V0xwB0q7VQvBe1IPBmmDyQtt'
      })
        .then(response => {
          const homeData = response.data.story.content.body
          commit('setHomeData', homeData)
        }).catch(error => {
          commit('homeDataFailed', error)
        })
    },
    loadCollectionData ({ commit }) {
      commit('beforeLoadCollectionData')
      const StoryblokClient = require('storyblok-js-client')
      const Storyblok = new StoryblokClient({
        accessToken: 'wANpEQEsMYGOwLxwXQ76Ggtt',
        cache: {
          clear: 'auto',
          type: 'memory'
        }
      })
      Storyblok.get('cdn/stories/collection', {
        token: 'V0xwB0q7VQvBe1IPBmmDyQtt'
      })
        .then(response => {
          const collectionData = response.data.story.content.body
          commit('setCollectionData', collectionData)
        }).catch(error => {
          commit('collectionDataFailed', error)
        })
    },
    loadAboutData ({ commit }) {
      commit('beforeLoadAboutData')
      const StoryblokClient = require('storyblok-js-client')
      const Storyblok = new StoryblokClient({
        accessToken: 'wANpEQEsMYGOwLxwXQ76Ggtt',
        cache: {
          clear: 'auto',
          type: 'memory'
        }
      })
      Storyblok.get('cdn/stories/about', {
        token: 'V0xwB0q7VQvBe1IPBmmDyQtt'
      })
        .then(response => {
          const aboutData = response.data.story.content.body
          commit('setAboutData', aboutData)
        }).catch(error => {
          commit('aboutDataFailed', error)
        })
    },
    loadWorkshopData ({ commit }) {
      commit('beforeLoadWorkshopData')
      const StoryblokClient = require('storyblok-js-client')
      const Storyblok = new StoryblokClient({
        accessToken: 'wANpEQEsMYGOwLxwXQ76Ggtt',
        cache: {
          clear: 'auto',
          type: 'memory'
        }
      })
      Storyblok.get('cdn/stories/workshops', {
        token: 'V0xwB0q7VQvBe1IPBmmDyQtt'
      })
        .then(response => {
          const workshopData = response.data.story.content.body
          commit('setWorkshopData', workshopData)
        }).catch(error => {
          commit('workshopDataFailed', error)
        })
    }
  }
})
