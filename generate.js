#!/usr/local/bin/node

var fs = require('fs');
var path = require('path');
var marked = require('marked');

var prepare = require('./modules/prepare');
var data = require('./modules/data');
var posts = require('./modules/posts');

marked.setOptions({
    renderer: new marked.Renderer()
});

var generate = function () {
    'use strict';

    var config = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/config.json'), 'utf8'));
    config.pwd = path.resolve(__dirname);

    console.log('generating blog...');

    prepare(config);
    data(config);
    posts(config);
};

generate();
