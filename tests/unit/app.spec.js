import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
