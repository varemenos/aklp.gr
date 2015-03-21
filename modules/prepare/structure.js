var fs = require('fs');

var structure = function (config) {
    'use strict';

    try {
        fs.mkdirSync(config.pwd + config.dist);
        fs.mkdirSync(config.pwd + config.dist + config.path.posts);
        console.log('    ✔ structured dist');
    } catch (e) {
        throw e;
    }
};

var exports = module.exports = structure;
