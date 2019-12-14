'use strict';
const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: "production",
    entry: {
        verdors: ['react', 'react-dom']
    },
    plugins: [
        new webpack.DllPlugin({
            name: '_dll_[name]',
            context: __dirname,
            path: path.resolve("./static/dll/vendor-mainfest.json")
        })
    ],
    output: {
        filename: '[name]_[hash].js',
        path: path.resolve("./static/dll/"),
        library: '_dll_[name]'
    }
}