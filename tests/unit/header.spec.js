import TheHeader from '@/components/TheHeader.vue'

import Vue from 'vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe('testing header...', () => {
  const wrapper = shallowMount(TheHeader, {
    localVue,
    router
  })
  
  it('header has all routes', () => {
    expect(wrapper.findAll('roouter-link')).toHaveLength(4);
  })
})