var rmdir = require('rimraf');

var clean = function (config) {
    'use strict';

    try {
        rmdir.sync(config.pwd + config.dist);
        console.log('    ✔ cleaned dist');
    } catch (e) {
        throw e;
    }
};

var exports = module.exports = clean;
