'use strict';

var program = require('commander');
var pkg = require('./package.json');
var chalk = require('chalk');
var logger = require('./lib/logger');

program.version(pkg.version);
program.option('-t, --token <token>', 'supply an auth token for this command');

var client = {};
client.cli = program;
client.logger = require('./lib/logger');
client.errorOut = function(error, status) {
  require('./lib/errorOut')(client, error, status);
};

program.action(function(cmd) {
  logger.error(chalk.red('Unrecognized Command:'), cmd);
});

require('./commands')(client);

module.exports = client;
