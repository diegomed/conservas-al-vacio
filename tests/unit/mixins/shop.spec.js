import { expect } from 'chai'
import shopMixin from '@/mixins/shop.js'

describe('shop.js', () => {
  it('Initialize the mixin', () => {
    expect(shopMixin).to.be.an.instanceOf(Object)
  })
})
