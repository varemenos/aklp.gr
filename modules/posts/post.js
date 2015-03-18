var path = require('path');
var fs = require('fs');
var jade = require('jade');
var marked = require('marked');

var post = function (config) {
    'use strict';

    var build = function (post) {
        var postPath = path.resolve(config.pwd + config.dist + config.path.posts + post.filename + '.html');
        fs.writeFileSync(postPath, post.rendered, 'utf8');
    };

    var layout = function () {
        config.posts.forEach(function (post) {
            var result = jade.renderFile('./templates/posts/post.jade', {
                title: config.title,
                post: post
            });

            post.rendered = result;

            build(post);
        });
    };

    layout();
};

var exports = module.exports = post;
