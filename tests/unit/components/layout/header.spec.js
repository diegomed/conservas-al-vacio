import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Header from '@/components/layout/Header.vue'

describe('Header.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Header)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
