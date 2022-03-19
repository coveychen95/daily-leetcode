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
    // !!! bundle 引入路径
    // publicPath: './',
    // 输出路径
    path: path.join(__dirname, 'dist'),
    // 输出名
    filename: `bundle.${new Date().valueOf()}.js`,
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
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'A DAY A DSA',
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 设置预定义环境
              presets: [
                [
                  '@babel/preset-env',
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: '58'
                    },
                    // 指定 corejs 版本
                    corejs: "3",
                    // 使用 corejs 的方式 usage 表示按需加载
                    useBuiltIns: 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        exclude: /node_modules/,
      }
    ]
  }
}