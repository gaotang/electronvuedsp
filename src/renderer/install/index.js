const install = function (Vue, opts = {}) {
  Vue.config.keyCodes = {
    v: 86,
    f1: 112,
    mediaPlayPause: 179,
    up: [38, 87]
  }

  Vue.mixin({
    mounted() {
      let { hash } = location
      const { isLogin } = this.$caches
      if (!isLogin && hash.length > 2) {
        location.href = '/'
      }
    }
  })

  Vue.prototype.$caches = { isLogin: false, user: {} }
  // auto install
  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
  }
}

export default { install }
