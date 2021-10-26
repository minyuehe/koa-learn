const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// debugger
const webpackConfig = {
    target: 'node',
    mode: 'development',
    entry: {
        // 控制条目的filename
        server: path.join(__dirname, './src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, './dist')
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: [path.join(__dirname, './node_modules')],
            }

        ]
    },
    externals: [nodeExternals()], // 排除不会使用到的node模块
    plugins: [
        new CleanWebpackPlugin(),
    ],
    // webpack5 只能添加这三个选项，
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    }

}

module.exports = webpackConfig;