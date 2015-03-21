var clean = require('./prepare/clean');
var structure = require('./prepare/structure');
var css = require('./prepare/css');
var js = require('./prepare/js');
var fonts = require('./prepare/fonts');

var prepare = function (config) {
    'use strict';

    console.log('  cleaning up dist...');
    clean(config);
    structure(config);
    css(config);
    js(config);
    fonts(config);
};

var exports = module.exports = prepare;
