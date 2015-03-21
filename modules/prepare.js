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

            console.log('    ✔ added stylesheets');
        } catch (e) {
            throw e;
        }
    };

    var addJS = function () {
        try {
            var src = config.pwd + '/assets/js';
            var dest = config.pwd + config.dist + '/assets/js';
            fse.copySync(src, dest);

            console.log('    ✔ added scripts');
        } catch (e) {
            throw e;
        }
    };

    var addFonts = function () {
        try {
            var src = config.pwd + '/assets/fonts';
            var dest = config.pwd + config.dist + '/assets/fonts';
            fse.copySync(src, dest);

            console.log('    ✔ added scripts');
        } catch (e) {
            throw e;
        }
    };

    function buildPath () {
        console.log('  cleaning up dist...');
        cleanDist();
        structureDist();
        addCSS();
        addJS();
        addFonts();
    }

    buildPath();
};

var exports = module.exports = prepare;
