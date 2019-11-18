'use strict';

const chalk = require('chalk');
const crossSpawn = require('cross-spawn');

const args = process.argv.slice(2);
const script = args.length > 0 ? args[0] : null;

if (script == null) {
    console.log(chalk.red('cannot find vst-cli command!'));
    return;
}

switch (script) {
    case "build":
    case "start": {
        const result = crossSpawn.sync('node', require.resolve('../scripts/' + script), {stdio: 'inherit'});
        console.log(result);
        break;
    }
    default:
        console.log(chalk.red('Unknown script "' + script + '".'));
        break;
}