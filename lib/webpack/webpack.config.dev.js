'use strict';

const path = require("path");
const merge = require('webpack-merge');

const vstJson = require('./../utils/vst.utils');
const baseConfig = require('./webpack.config.base');
const {filePath} = require('./../utils/entry.utils');

const devCofig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                include: path.resolve(filePath),
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    performance: {
        hints: "warning"
    }
}

module.exports = merge(baseConfig, devCofig);