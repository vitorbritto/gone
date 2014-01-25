var cfg = require('./config.json'),
    Ftp = require('ftp'),
    ftp = new Ftp();

ftp.connect(cfg.host, cfg.port, cfg.user, cfg.pass);

ftp.on('greeting', function() {
    console.log('→ Initializing transfer');
});

ftp.on('ready', function() {

    ftp.put(cfg.src, dest, function (err) {
    if (err) throw err;
        ftp.end();
    });

    ftp.delete(cfg.ignore, function (err) {
    if (err) throw err;
        ftp.end();
    });

});

ftp.on('end', function() {
    console.log('→ Closing connection');
});
