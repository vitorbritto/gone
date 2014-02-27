var cfg   = require('./config.json'),
    Rsync = require('rsync'),
    rsync = new Rsync();

// Build
rsync
    .progress()
    .shell(cfg.shell)
    .flags(cfg.flags)
    .source(cfg.src)
    .destination('server:' + cfg.dest)
    .exclude(cfg.ignore);

// Execute
rsync.execute(
    function(error, code, cmd) {
        console.log('✔ done');
    }, function(data){
        console.log('→ Uploading ' + data);
    }, function(data) {
        if (err) throw err;
    }
);
