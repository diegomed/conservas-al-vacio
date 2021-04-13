import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Catalog from '@/views/shop/Catalog.vue'

describe('Catalog.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Catalog)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
