'use strict';

process.env.NODE_ENV = 'production';
const chalk = require('chalk');
const webpack = require('webpack');

const webpackConfig = require('./../lib/webpack/webpack.config.dll');
const compiler = webpack(webpackConfig);

compiler.run(function(err , stats){
    if(err){
        console.log(chalk.red('build error'))
    }
    stats && console.log(stats.toString({
        colors: true,
        chunks: false,
        children: false,
        modules: false,
        chunkModules: false
    }));
    console.log(chalk.green('build success!'));
})