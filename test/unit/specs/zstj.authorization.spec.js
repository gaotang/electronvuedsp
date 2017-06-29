import Token from '@/utils/ajax/zstj/authorization'

describe('测试ZSTJ接口验签', () => {
  it('ZSTJ接口Token', () => {
    expect(Token('Role', { Id: 1, Name: 'Test' })).to.be.an('string')
  })
})

