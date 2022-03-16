const path = require('path')
const { resolve } = path
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // !!! 需支持 本地 正式 
  mode: 'development',
  
  // 入口
  entry: resolve(__dirname, 'src/main.ts'),
  // 输出
  output: {
    // bundle 引入路径
    publicPath: './',
    // 输出路径
    path: path.join(__dirname, 'dist'),
    // 输出名
    filename: 'bundle.js',
    // 环境配置
    environment: {
      // 不使用箭头函数
      arrowFunction: false,
      // 不使用 const
      const: false
    }
  },
  
  // ===== 本地开发配置 =====
  devtool: 'inline-source-map',
  // 配置本地服务
  devServer: {
    progress: true,
    // static: {
    //   directory: path.join(__dirname, 'public'),
    // },
    compress: true,
    // port: 9000,
  },
  plugins:[
    new HtmlWebpackPlugin({
      meta: {
        title: 'A DAY A DSA'
      }
    })
  ]
}