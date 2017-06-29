import Token from '@/utils/ajax/dsp/authorization'

describe('测试DSP接口验签', () => {
  it('DSP接口Token', () => {
    expect(Token('Role', { Id: 1, Name: 'Test' })).to.be.equal('Basic SFpfQVBJX1YyOmUwNGM2NTNjYmJkMDkyOGE2Y2Y4N2Q4NTUzYjBjNmM1')
  })
})

