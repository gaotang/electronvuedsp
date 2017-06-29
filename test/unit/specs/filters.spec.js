import Vue from 'vue'
import '@/filters'

describe('filters过滤器', () => {
  it('测试clearT的过滤器', () => {
    const vm = new Vue()
    expect(vm.$options.filters.clearT('2012-02-23T23:20:25'))
      .to.equal('2012-02-23 23:20:25')
  })

  it('测试subStr的过滤器', () => {
    const vm = new Vue()
    expect(vm.$options.filters.subStr('2012-02-23T23:20:25'))
      .to.equal('2012')
  })
})
