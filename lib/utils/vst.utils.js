'use strict';

const fs = require("fs")
const path = require('path');

const filePath = './vst.json';
const vstJson = JSON.parse(fs.readFileSync(path.resolve(filePath)));

const alias = {
    "block": path.resolve("node_modules/vst-block"),
    "common": path.resolve("node_modules/vst-common"),
    "comps": path.resolve("node_modules/vst-comps")
}

vstJson.resolve.alias = Object.assign(alias, vstJson.resolve.alias);
vstJson.resolve.modules = vstJson.resolve.modules.concat([path.resolve('./src/apps')]);

module.exports = vstJson;