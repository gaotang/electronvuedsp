describe('加法函数的测试', function () {
  it('1 加 1 应该等于 2', function () {
    expect(1 + 1).to.be.equal(2)
  })

  it('数组的长度等于 3', function () {
    expect([111, 2, 3]).to.have.lengthOf(3)
  })

  it('should return -1 when the value is not present', function () {
    assert.equal(-1, [1, 2, 3].indexOf(5))
    assert.equal(-1, [1, 2, 3].indexOf(0))
  })
})

// // 相等或不相等
// expect(4 + 5).to.be.equal(9)
// expect(4 + 5).to.be.not.equal(10)
// expect(foo).to.be.deep.equal({ bar: 'baz' })

// // 布尔值为true
// expect('everthing').to.be.ok
// expect(false).to.not.be.ok

// // typeof
// expect('test').to.be.a('string')
// expect({ foo: 'bar' }).to.be.an('object')
// expect(foo).to.be.an.instanceof(Foo)

// // include
// expect([1, 2, 3]).to.include(2)
// expect('foobar').to.contain('foo')
// expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo')

// // empty
// expect([]).to.be.empty
// expect('').to.be.empty
// expect({}).to.be.empty

// // match
// expect('foobar').to.match(/^foo/)

// it('测试应该5000毫秒后结束', function (done) {
//   var x = true
//   var f = function () {
//     x = false
//     expect(x).to.be.not.ok
//     done() // 通知Mocha测试结束
//   }
//   setTimeout(f, 4000)
// })

// it('异步请求应该返回一个对象', function (done) {
//   request
//     .get('https://api.github.com')
//     .end(function (err, res) {
//       expect(res).to.be.an('object')
//       done()
//     })
// })

// it('异步请求应该返回一个对象', function () {
//   return fetch('https://api.github.com')
//     .then(function (res) {
//       return res.json()
//     }).then(function (json) {
//       expect(json).to.be.an('object')
//     })
// })

// // 06
// describe('hooks', function () {
//   before(function () {
//     // 在本区块的所有测试用例之前执行
//   })

//   after(function () {
//     // 在本区块的所有测试用例之后执行
//   })

//   beforeEach(function () {
//     // 在本区块的每个测试用例之前执行
//   })

//   afterEach(function () {
//     // 在本区块的每个测试用例之后执行
//   })

//   // test cases
// })
