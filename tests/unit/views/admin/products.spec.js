import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Products from '@/views/admin/Products.vue'

describe('Products.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Products)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
