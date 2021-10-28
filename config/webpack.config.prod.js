const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base');
const TerserPlugin = require('terser-webpack-plugin');

const webpackConfig = merge(webpackBaseConfig, {
    mode: 'production',
    stats: {
        children: false,
        warnings: false,
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                warnings: false,
                compress: {
                    warnings: false,
                    drop_console: false,
                    dead_code: true,
                    drop_debugger: true,
                },
                output: {
                    comments: false,
                    beautify: false,
                },
                mangle: true,
            },
            parallel: true,
        })],
    },
});

module.exports = webpackConfig;