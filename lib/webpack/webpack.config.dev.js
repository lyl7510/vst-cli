'use strict';

const path = require("path");
const merge = require('webpack-merge');

const vstJson = require('./../utils/vst.utils');
const baseConfig = require('./webpack.config.base');
const {filePath ,cssIncludeList} = require('./../utils/tool.utils');

const devCofig = {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                include: cssIncludeList,
                use: ["style-loader", "css-loader", {
                    loader:"less-loader",
                    options:{
                        javascriptEnabled:true
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