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

module.exports = {
    entry: entry,
    filePath: filePath
}