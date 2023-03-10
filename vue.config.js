/* eslint-disable prettier/prettier */
const { defineConfig } = require("@vue/cli-service");
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  // __PROJECT__: JSON.stringify({
  //   VERSION: "pkg.version",
  // }),
  transpileDependencies: true,
  // publicPath: "/",
  publicPath: process.env.NODE_ENV === "production" ? './' : '/',
  outputDir: "competition",
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === "development",
  productionSourceMap: false,
  devServer: {
    port: 8080,
    open: true,
    proxy: {
      '/api': {
        target: 'https://www.modesignstore.cn',
        changOrigin: true,
        // 代理 websockets
        ws: true,
        // 如果接口中是没有api的，那就直接置空，'^/api': ''，
        // 如果接口中有api，那就得写成{'^/api':'/api'}
        pathRewrite: {
          '^/api': '/api'
        }
      }, '/prod-api': {
        target: 'http://129.211.219.138:8081',
        changOrigin: true,
        // 代理 websockets
        ws: true,
        // 如果接口中是没有api的，那就直接置空，'^/api': ''，
        // 如果接口中有api，那就得写成{'^/api':'/api'}
        pathRewrite: {
          '^/prod-api': '/prod-api'
        }
      },
      // '/match': {
      //   // target: 'http://129.211.219.138',
      //   target: 'http://10.211.240.198:8080',
      //   changOrigin: true,
      //   // 代理 websockets
      //   ws: true,
      //   // 如果接口中是没有api的，那就直接置空，'^/api': ''，
      //   // 如果接口中有api，那就得写成{'^/api':'/api'}
      //   pathRewrite: {
      //     '^/match': '/match'
      //   }
      // }
    }
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    // before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload

    // config.plugin('preload').tap(() => [
    //   {
    //     rel: 'preload',
    //     // to ignore runtime.js
    //     // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
    //     fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
    //     include: 'initial'
    //   }
    // ])

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch')

    // set svg-sprite-loader
    // config.module
    //   .rule('svg')
    //   .exclude.add(resolve('src/icons'))
    //   .end()

    const entry = config.entry('app') // ------ 入口起点
    entry
      .add('babel-polyfill') // --------------- 添加插件，用于实现浏览器不支持原生功能的代码，例如对于一些不支持ES6的浏览器
      .end()

    // config.module
    //   .rule('icons')
    //   .test(/\.svg$/)
    //   .include.add(resolve('src/icons'))
    //   .end()
    //   .use('svg-sprite-loader')
    //   .loader('svg-sprite-loader')
    //   .options({
    //     symbolId: 'icon-[name]'
    //   })
    //   .end()

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: './src/components', // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          // https:// webpack.js.org/configuration/optimization/#optimizationruntimechunk
          config.optimization.runtimeChunk('single')
        }
      )
  }
});
