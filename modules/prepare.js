var fse = require('fs-extra');
var fs = require('fs');
var rmdir = require('rimraf');

var prepare = function (config) {
    'use strict';

    var cleanDist = function () {
        try {
            rmdir.sync(config.pwd + config.dist);
            console.log('    ✔ cleaned dist');
        } catch (e) {
            throw e;
        }
    };

    var structureDist = function () {
        try {
            fs.mkdirSync(config.pwd + config.dist);
            fs.mkdirSync(config.pwd + config.dist + config.path.posts);
            console.log('    ✔ structured dist');
        } catch (e) {
            throw e;
        }
    };

    var addCSS = function () {
        try {
            var src = config.pwd + '/assets/css';
            var dest = config.pwd + config.dist + '/assets/css';
            fse.copySync(src, dest);

            console.log('    ✔ added stylesheet');
        } catch (e) {
            throw e;
        }
    };

    function buildPath () {
        console.log('  cleaning up dist...');
        cleanDist();
        structureDist();
        addCSS();
    }

    buildPath();
};

var exports = module.exports = prepare;
