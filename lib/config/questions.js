// =====================================================
// Questions
// =====================================================

module.exports = [
    {
        choices: [
            {
                'name': 'FTP',
                'value': 'ftp'
            },
            {
                'name': 'SSH',
                'value': 'ssh'
            },
            {
                'name': 'Rsync',
                'value': 'rsync'
            },
            {
                'name': 'Git',
                'value': 'git'
            }

        ],
        name: 'deploy',
        message: 'Which deploy method would you like to use?',
        type: 'list'
    }
];
