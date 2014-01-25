#!/usr/bin/env node

// =====================================================
// Configuration
// =====================================================

var cmd      = require('commander'),
    inquirer = require('inquirer');


// =====================================================
// CLI Commands
// =====================================================

cmd
    .command('run')
    .description('Initialize Gone')
    .action(initGone);

cmd.parse(process.argv);

if (process.argv.length === 2) {
    cmd.help();
}


// =====================================================
// Initialize
// =====================================================

function initGone() {

    var questions  = require('./lib/config/questions'),
        generate   = require('./lib/config/generate');

    inquirer.prompt(questions, generate);

}
