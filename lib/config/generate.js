// =====================================================
// Generate Project Structure
// =====================================================

// Modules
var sh = require('shelljs');
require('colors');

module.exports = function (answers) {

    var deploy = answers.deploy;

    sh.echo('→ Initializing'.cyan);
    sh.mkdir('-p', './.temp');
    sh.cp('./lib/template/_package.json', './.temp/package.json');

    switch (deploy) {

    case 'ftp':
        sh.cp('./lib/template/ftp/*', './.temp');
        sh.exec('npm i ftp --save');
        break;

    case 'ssh':
        sh.cp('./lib/template/ssh/*', './.temp');
        sh.exec('npm i ssh --save');
        break;

    case 'rsync':
        sh.cp('./lib/template/rsync/*', './.temp');
        sh.exec('npm i rsync --save');
        break;

    case 'git':
        sh.cp('./lib/template/git/*', './.temp');
        sh.exec('npm i git --save');
        break;

    }

    sh.rm('-rf', [
        './node_modules/.bin',
        './node_modules/colors',
        './node_modules/commander',
        './node_modules/inquirer',
        './node_modules/shelljs',
        './.git',
        './lib',
        '.DS_Store',
        '.gitignore',
        '.travis.yml',
        'gone.js',
        'package.json',
        'LICENSE',
        'README.md'
        ]
    );
    sh.cp('./.temp/*', './');
    sh.rm('-rf', './.temp');

    sh.echo('✔ done'.green);

};
