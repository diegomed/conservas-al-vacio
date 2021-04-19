import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ProductDetails from '@/views/shop/ProductDetails.vue'

const $route = {
  params: {
    id: 1
  }
}

const $store = {
  dispatch: () => {}
}

describe('ProductDetails.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(ProductDetails, {
      global: {
        mocks: {
          $route,
          $store
        }
      }
    })
    expect(wrapper.exists()).to.be.equal(true)
  })
})
