import { expect } from 'chai'
import loadingStore from '@/store/modules/cart.js'

describe('loading.js', () => {
  it('Initialize the loading store module', () => {
    expect(loadingStore).to.be.an.instanceOf(Object)
  })
})
