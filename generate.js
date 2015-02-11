#!/usr/local/bin/node

var marked = require('marked');
var fs = require('fs');
var posts = require('./modules/posts');
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

marked.setOptions({
	renderer: new marked.Renderer()
});

posts.generate(config.posts.path)
    .then(posts.getPosts)
    .then(posts.getMetadata)
    .then(posts.getContent)
    .then(posts.getTitles)
    .then(posts.applyLayout)
    .then(posts.build);
