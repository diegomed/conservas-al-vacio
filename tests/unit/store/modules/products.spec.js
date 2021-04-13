import { expect } from 'chai'
import productsStore from '@/store/modules/products.js'

describe('products.js', () => {
  it('Initialize the products store module', () => {
    expect(productsStore).to.be.an.instanceOf(Object)
  })
})
