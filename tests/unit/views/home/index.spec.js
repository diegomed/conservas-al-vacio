import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HomeIndex from '@/views/home/Index.vue'

const $store = {
  dispatch: () => {},
  getters: {
    greet: 'Hello World'
  }
}

describe('Home Index.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(HomeIndex, {
      global: {
        mocks: {
          $store
        }
      }
    })
    expect(wrapper.exists()).to.be.equal(true)
  })
})
