const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// debugger
console.log(process.env.NODE_ENV);
const webpackConfig = {
    target: 'node',
    entry: {
        // 控制条目的filename
        server: path.join(__dirname, '../src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: [path.join(__dirname, '../node_modules')],
            }

        ]
    },
    externals: [nodeExternals()], // 排除不会使用到的node模块
    plugins: [
        new CleanWebpackPlugin(),
        // 创建一个全局常量,webpack打包构建时，解析对应值
        // optimization告诉webpack设置环境变量为mode的值,所以不需要
        // 如果在config文件中需要判断env就在脚本指令中传达NODE_ENV即可
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: process.env.NODE_ENV === 'production' ? '"production2"' : '"development1"'
        //     }
        // })
    ],
    // webpack5 只能添加这三个选项，
    node: {
        global: true,
        __filename: true,
        __dirname: true,
    }

}

module.exports = webpackConfig;