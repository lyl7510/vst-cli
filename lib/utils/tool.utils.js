'use strict';

const fs = require("fs")
const path = require('path');

const filePath = './src/apps/';
const entryFiles = ['index.css', 'index.scss', 'index.tsx'];
const entry = {};
const entryList = [];

const realList = fs.readdirSync(path.resolve(filePath));
realList.forEach((file) => {
    if (entryFiles.includes(file)) {
        entryList.push(path.resolve(filePath, file));
    }
})
entry.index = entryList;


const alias = {
    "block": path.resolve("node_modules/vst-block"),
    "common": path.resolve("node_modules/vst-common"),
    "comps": path.resolve("node_modules/vst-comps")
}

module.exports = {
    entry: entry,
    filePath: filePath,
    cssIncludeList: [path.resolve(filePath), path.resolve("./node_modules/comps"), path.resolve("./node_modules/block"), path.resolve("./node_modules/antd")]
}