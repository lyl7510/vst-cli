'use strict';

const fs = require("fs")
const path = require('path');

const filePath = './vst.json';
const vstJson = JSON.parse(fs.readFileSync(path.resolve(filePath)));

vstJson.resolve.modules = vstJson.resolve.modules.concat([path.resolve('./src/apps')]);

module.exports = vstJson;