import { expect } from 'chai'
import authStore from '@/store/modules/auth.js'

describe('auth.js', () => {
  it('Initialize the auth store module', () => {
    expect(authStore).to.be.an.instanceOf(Object)
  })
})
