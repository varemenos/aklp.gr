var make = require('./rss/make');
var populate = require('./rss/populate');
var write = require('./rss/write');

var rss = function (config) {
    'use strict';

    make(config);
    populate(config);
    write(config);
};

var exports = module.exports = rss;
