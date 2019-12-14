'use strict';

const path = require('path');
const merge = require('webpack-merge');
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const baseConfig = require('./webpack.config.base');
const {filePath} = require('./../utils/tool.utils');

const prodConfig = {
    devtool: "none",
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                include: path.resolve(filePath),
                use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                exclude: /min.js/,
                terserOptions: {
                    parse: {
                        ecma: 8
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        comparisons: false,
                        inline: 2
                    },
                    mangle: {
                        safari10: true
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {},
                canPrint: false
            })
        ],
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '-',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            dry: false,
            verbose: false
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css'
        })
    ],
    performance: {
        hints: false
    }
}

module.exports = merge(baseConfig, prodConfig);