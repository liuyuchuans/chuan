const path = require('path');
module.exports = {
    mode: 'production',  // production 线上环境  development  //开发环境
    entry: './src/index.js',
    target: 'node',
    output:{
        path: path.resolve(__dirname,'build'),
        filename: 'bundle.js'
    }
}