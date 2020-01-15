'use strict';

const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');
const {cssIncludeList} = require('./../utils/tool.utils');

const devCofig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                include: cssIncludeList,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    performance: {
        hints: "warning"
    }
}

module.exports = merge(baseConfig, devCofig);