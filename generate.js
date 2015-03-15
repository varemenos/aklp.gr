#!/usr/local/bin/node

var fs = require('fs');
var path = require('path');
var marked = require('marked');

var data = require('./modules/data');
var posts = require('./modules/posts');

marked.setOptions({
    renderer: new marked.Renderer()
});

var generate = function () {
    'use strict';

    var config = JSON.parse(fs.readFileSync(path.resolve(__dirname + '/config.json'), 'utf8'));
    config.pwd = path.resolve(__dirname);

    data(config);
    posts(config);
};

generate();
