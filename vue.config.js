const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  lintOnSave: true,
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))

    config.plugins.delete('pwa')
    config.plugins.delete('workbox')
  }
}
