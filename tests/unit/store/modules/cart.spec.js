import { expect } from 'chai'
import cartStore from '@/store/modules/cart.js'

describe('cart.js', () => {
  it('Initialize the cart store module', () => {
    expect(cartStore).to.be.an.instanceOf(Object)
  })
})
