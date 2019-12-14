'use strict';

const fs = require("fs")
const path = require('path');

const filePath = './src/apps/';
const entryFiles = ['index.css', 'index.less', 'index.tsx'];
const entry = {};
const entryList = [];

const realList = fs.readdirSync(path.resolve(filePath));
realList.forEach((file) => {
    if (entryFiles.includes(file)) {
        entryList.push(path.resolve(filePath, file));
    }
})
entry.index = entryList;

module.exports = {
    entry: entry,
    filePath: filePath,
    cssIncludeList: [path.resolve("./src"), path.resolve("./static"), path.resolve("./node_modules/vst-repository"), path.resolve("./node_modules/antd")],
    imageIncludeList:[path.resolve("./static")],
    jsIncludeList:[path.resolve("./src")]
}