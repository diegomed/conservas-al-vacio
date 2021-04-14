import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ProductCard from '@/components/UI/ProductCard.vue'

describe('ProductCard.vue', () => {
  it('renders the component', () => {
    const wrapper = shallowMount(ProductCard, {
      props: {
        product: { id: 1, name: 'Pepinos', img: 'http://innatia.info/images/galeria/conservas-2.jpg', price: 50 }
      }
    })
    expect(wrapper.exists()).to.be.equal(true)
  })
})
