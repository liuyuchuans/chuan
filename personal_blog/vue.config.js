module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:9595',
          pathRewrite: {'^/api' : ''}
        }
      }
    }
  };