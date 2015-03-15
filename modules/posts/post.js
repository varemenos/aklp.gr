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
                keywords: post.keywords.join(' '),
                author: post.author,
                categories: post.categories,
                title: config.title + ' | ' + post.title,
                description: post.description,
                post: marked(post.content)
            });

            post.rendered = result;

            build(post);
        });
    };

    layout();
};

var exports = module.exports = post;
