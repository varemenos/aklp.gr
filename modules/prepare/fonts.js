var fse = require('fs-extra');

var fonts = function (config) {
    'use strict';

    try {
        var src = config.pwd + '/assets/fonts';
        var dest = config.pwd + config.dist + '/assets/fonts';
        fse.copySync(src, dest);

        console.log('    ✔ added scripts');
    } catch (e) {
        throw e;
    }
};

var exports = module.exports = fonts;
