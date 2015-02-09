#!/usr/local/bin/node

var marked = require('marked');
var jade = require('jade');
var fs = require('fs');

// var highlight = require('highlight.js');

marked.setOptions({
	renderer: new marked.Renderer()
	// highlight: function (code) { return highlight.highlightAuto(code).value; }
});

var layout = fs.readFileSync('./templates/layout.jade', 'utf8');

var postsPath = './posts/';
var postDir = fs.readdirSync(postsPath);

var checkFileExtension = function (files, extension) {
    'use strict';

    var result = files.filter(function (file) {
        return file.substr(-extension.length) === extension;
    });

    return result;
};

var posts = checkFileExtension(postDir, '.md');

posts = posts.map(function (post) {
    'use strict';
    return fs.readFileSync('./posts/' + post, 'utf8');
});

var result = jade.render(layout, {
    keywords: 'a, b, c',
    author: 'Adonis K.',
    description: ''
});

console.log(result);
