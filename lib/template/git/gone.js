var cfg  = require('./config.json'),
    exec = require('process').exec,
    Git  = require('git'),
    git  = new Git();

git.on('greeting', function() {
    console.log('→ Initializing transfer');
});

git.on('ready', function() {
    exec('git@' + cfg.server + ':' + cfg.user + '/' + cfg.repos + '.git');
});

git.on('end', function() {
    console.log('✔ done');
});
