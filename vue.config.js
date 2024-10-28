const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/*.scss";`
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'lodash': path.resolve(__dirname, 'node_modules/lodash')
      }
    }
  }
})