// Yepeng http://hz46w4s62:89/api/
export default {
  production: {
    BASE_URL: {
      DSP: 'http://hc.ihaozhuo.com:90/api/',
      ZSTJ: 'http://zstj.ihaozhuo.com:91/api/V3/'
    }
  },
  testing: {
    BASE_URL: {
      DSP: 'http://hzswvajgs01:91/api/',
      DSPZhu: 'http://hzcjq5xj2:8099/api/',
      ZSTJ: 'http://hzswvajgs01:142/api/V3/'
    }
  },
  development: {
    BASE_URL: {
      DSP: 'http://hzswvajgs01:91/api/',
      DSPZhu: 'http://hzcjq5xj2:8099/api/',
      ZSTJ: 'http://hzswvajgs01:142/api/V3/'
    }
  }
}
