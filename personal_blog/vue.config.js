module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://www.liuyuchuan.cn:9595',
          pathRewrite: {'^/api' : ''}
        }
      }
    }
  };