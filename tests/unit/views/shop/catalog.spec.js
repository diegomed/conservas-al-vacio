import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Catalog from '@/views/shop/Catalog.vue'

const $store = {
  dispatch: () => {}
}

describe('Catalog.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Catalog, {
      global: {
        mocks: {
          $store
        }
      }
    })
    expect(wrapper.exists()).to.be.equal(true)
  })

  // it('renders the component', () => {
  //   const wrapper = shallowMount(Catalog)
  //   wrapper.find('ProductCard').trigger('details-handler')
  //   wrapper.vm.goToDetailsHandler()
  //   expect(wrapper.exists()).to.be.equal(true)
  // })
})
