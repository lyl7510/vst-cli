'use strict';

const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const vstJson = require('./../utils/vst.utils');
const {entry, filePath} = require('./../utils/tool.utils');


module.exports = {
    entry: entry,
    mode: process.env.NODE_ENV,
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /.(bmp|gif|jpe?g|png)$/,
                loader: 'url-loader',
                include: path.resolve(filePath),
                options: {
                    limit: 20480,
                    name: 'static/img/[name].[hash:8].[ext]',
                }
            },
            {
                test: /\.(eot|woff|ttf|svg)$/,
                include: path.resolve(filePath),
                use: "file-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: require.resolve('source-map-loader'),
                        options: {
                            enforce: 'pre',
                            plugins:[
                                ['import',{libraryName:'antd', style:true}]
                            ],
                            cacheDirectory: true
                        }
                    },
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            compact: true
                        }
                    }
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                use:[
                    {
                        loader: require.resolve('ts-loader'),
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: vstJson.resolve.alias,
        // modules: vstJson.resolve.modules,
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".less", ".json"]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        /*new webpack.DllReferencePlugin({
            context: __dirname,
            manifest:path.resolve("./static/dll/vendor-mainfest.json")
        }),*/
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.resolve("./src/apps/index.html"),
            favicon: path.resolve("./static/img/favicon.ico"),
            cache: false,
            inject: true
        }),
        new ForkTsCheckerWebpackPlugin({
            async: true,
            watch: path.resolve('./src/apps'),
            tsconfig: path.resolve('./tsconfig.json'),
            tslint: path.resolve('./tslint.json'),
            useTypescriptIncrementalApi: true
        })
    ],
    output: {
        filename: '[name]_[hash].js',
        path: path.resolve(vstJson.output),
        publicPath: vstJson.publicPath,
        chunkFilename: 'router/[name].chunk.js'
    }
}