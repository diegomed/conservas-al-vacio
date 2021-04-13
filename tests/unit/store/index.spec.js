import { expect } from 'chai'
import store from '@/store/index.js'

describe('store.js', () => {
  it('Initialize the store', () => {
    expect(store).to.be.an.instanceOf(Object)
  })
})
