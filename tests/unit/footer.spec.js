import { shallowMount } from '@vue/test-utils'

import TheFooter from '@/components/TheFooter.vue'

describe('footer', () => {
  let wrapper = shallowMount(TheFooter);
  
  it('testing wrapper...', () => {
    expect(wrapper).toBeTruthy();
  })

  it('component has all router-links', () => {
    expect(wrapper.findAll('router-link')).toHaveLength(3);
  })

  it('insta has correct link', () => {
    expect(wrapper.find('.insta-link').html()).toBe('<a href="https://www.instagram.com/stavrosperakis/" target="blank" class="insta-link">instagram</a>')
  })
})