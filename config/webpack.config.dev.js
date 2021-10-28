const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');

const webpackConfig = merge(webpackBaseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    // webpack输出的日志消息，不传出来？？？
    stats: {
        children: false,
    },
});

module.exports = webpackConfig;