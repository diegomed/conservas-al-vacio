import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ProductDetails from '@/views/shop/ProductDetails.vue'

describe('ProductDetails.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(ProductDetails)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
