import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Register from '@/views/home/Register.vue'

describe('Register.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Register)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
