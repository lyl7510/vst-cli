'use strict';

const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');
const {cssIncludeList} = require('./../utils/tool.utils');

const devCofig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                include: cssIncludeList,
                use: ["style-loader", "css-loader", {
                    loader: "less-loader",
                    options: {
                        javascriptEnabled: true
                    }
                }]
            }
        ]
    },
    performance: {
        hints: "warning"
    }
}

module.exports = merge(baseConfig, devCofig);