import config from '@/config'

describe('测试配置环境地址', function () {
  it('生产环境的DSP地址', function () {
    expect(config.production.BASE_URL.DSP).to.be.equal('http://hc.ihaozhuo.com:90/api/')
  })

  it('生产环境的ZSTJ地址', function () {
    expect(config.production.BASE_URL.ZSTJ).to.be.equal('http://zstj.ihaozhuo.com:91/api/V3/')
  })

  it('测试环境的DSP地址', function () {
    expect(config.testing.BASE_URL.DSP).to.be.equal('http://hzswvajgs01:91/api/')
  })

  it('测试环境的ZSTJ地址', function () {
    expect(config.testing.BASE_URL.ZSTJ).to.be.equal('http://hzswvajgs01:142/api/V3/')
  })

  it('开发环境的DSP地址', function () {
    expect(config.development.BASE_URL.DSP).to.be.equal('http://hzswvajgs01:91/api/')
  })

  it('开发环境的DSP朱宗海地址', function () {
    expect(config.development.BASE_URL.DSPZhu).to.be.equal('http://hzcjq5xj2:8099/api/')
  })

  it('开发环境的ZSTJ地址', function () {
    expect(config.development.BASE_URL.ZSTJ).to.be.equal('http://hzswvajgs01:142/api/V3/')
  })
})

