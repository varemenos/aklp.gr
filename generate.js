#!/usr/local/bin/node

var marked = require('marked');
var fs = require('fs');
var posts = require('./modules/posts');

marked.setOptions({
	renderer: new marked.Renderer()
});

posts.generate()
    .then(posts.getPosts)
    .then(posts.getMetadata)
    .then(posts.getContent)
    .then(posts.getTitles)
    .then(posts.applyLayout)
    .then(posts.build);
