import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Login from '@/views/home/Login.vue'

describe('Login.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(Login)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
