'use strict';

process.env.NODE_ENV = 'development';

const chalk = require('chalk');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const webpackDevConfig = require('./../lib/webpack/webpack.config.dev');
const vstJson = require('./../lib/utils/vst.utils');

const PORT = vstJson.devServer.port || 4500;
const HOST = vstJson.devServer.host || '0.0.0.0';

const compiler = webpack(webpackDevConfig);
const devServer = new webpackDevServer(compiler, {
    host: HOST,
    open: false,
    port: PORT,
    publicPath: vstJson.publicPath,
    inline:true,
    noInfo:true,
    disableHostCheck:true,
    stats:{colors:true},
    watchOptions:{
        aggregateTimeout:300,
        poll:300
    },
    clientLogLevel:"info"
})

devServer.listen(PORT, HOST, function (err) {
    if (err) {
        console.log(chalk.red(err));
    }
    console.log(chalk.green("dev server start!"), "http://" + HOST + ":" + PORT);
})
