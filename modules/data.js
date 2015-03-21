var posts = require('./data/posts');
var images = require('./data/images');
var metadata = require('./data/metadata');
var content = require('./data/content');
var titles = require('./data/titles');
var descriptions = require('./data/descriptions');
var categories = require('./data/categories');

var data = function (config) {
    'use strict';

    console.log('  loading data...');
    posts(config);
    images(config);
    metadata(config);
    content(config);
    titles(config);
    descriptions(config);
    categories(config);
};

var exports = module.exports = data;
