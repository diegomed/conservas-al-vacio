import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import AdminIndex from '@/views/admin/Index.vue'

describe('Admin Index.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(AdminIndex)
    expect(wrapper.exists()).to.be.equal(true)
  })
})
