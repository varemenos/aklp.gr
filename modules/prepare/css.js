var fse = require('fs-extra');

var css = function (config) {
    'use strict';

    try {
        var src = config.pwd + '/assets/css';
        var dest = config.pwd + config.dist + '/assets/css';
        fse.copySync(src, dest);

        console.log('    ✔ added stylesheets');
    } catch (e) {
        throw e;
    }
};

var exports = module.exports = css;
