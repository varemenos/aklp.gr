#!/usr/local/bin/node

var fs = require('fs');
var marked = require('marked');

var data = require('./modules/data');
var posts = require('./modules/posts/build');

marked.setOptions({
    renderer: new marked.Renderer()
});

var generate = function () {
    'use strict';

    var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

    data(config);
    posts(config);
};

generate();
