import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import NotFound from '@/views/error-pages/NotFound.vue'

describe('NotFound.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(NotFound)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
