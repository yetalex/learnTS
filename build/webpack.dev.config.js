module.exports = {
  devtool: 'cheap-module-eval-source-map'
}

// cheap : 忽略类信息
// module: 定位到ts源码
// eval-source-map: 会将source-map以data-url的形式打包到文件中