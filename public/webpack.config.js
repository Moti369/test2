const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ZipPlugin = require('zip-webpack-plugin');
const path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        index: path.resolve(SRC_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js'
    },
    // 开启dev source map
    devtool: 'eval-source-map',
    // 开启 webpack dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
        //progress: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
        //root: APP_PATH
    },
    module: {
        // 配置preLoaders, 将eslint添加进去
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint-loader'],
                include: SRC_PATH,
                enforce: 'pre'
            }, {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: SRC_PATH,
                exclude: path.resolve(ROOT_PATH, 'node_modules')
            }
        ]
    },
    // 配置plugin
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new ZipPlugin({
            path: BUILD_PATH,
            filename: `test.zip`,
        }),
        new HtmlWebpackPlugin({
            title: 'react-webpack-demo',
            filename: 'index.html',
            template: `${__dirname}/src/template.ejs`,
            //template: path.resolve(SRC_PATH, 'templates', 'index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                removeAttributeQuotes: true
            }
        })
    ]
};
