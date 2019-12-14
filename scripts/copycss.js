const fs = require("fs");
const copy = require('copy');
const path = require("path");
const chalk = require('chalk');

var source = "./src/**/*.less";
var dest = "./dist";

const isExist = fs.existsSync(path.resolve(dest));
if (isExist) {
    copy(source, dest, function (err, files) {
        if (err) {
            console.log(chalk.red(err));
        }
        console.log(chalk.green("copy success!"));
    })
} else {
    console.log(chalk.red("请先执行 npm run build"));
}
