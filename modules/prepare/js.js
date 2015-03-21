var fse = require('fs-extra');

var js = function (config) {
    'use strict';

    try {
        var src = config.pwd + '/assets/js';
        var dest = config.pwd + config.dist + '/assets/js';
        fse.copySync(src, dest);

        console.log('    ✔ added scripts');
    } catch (e) {
        throw e;
    }
};

var exports = module.exports = js;
