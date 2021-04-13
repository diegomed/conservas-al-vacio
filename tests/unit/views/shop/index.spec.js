import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ShopIndex from '@/views/shop/Index.vue'

describe('Shop Index.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(ShopIndex)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
