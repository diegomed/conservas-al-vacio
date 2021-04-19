import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ShopIndex from '@/views/shop/Index.vue'

const $store = {
  getters: {
    isLoading: false
  }
}

describe('Shop Index.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(ShopIndex, {
      global: {
        mocks: {
          $store
        }
      }
    })
    expect(wrapper.exists()).to.be.equal(true)
  })
})
