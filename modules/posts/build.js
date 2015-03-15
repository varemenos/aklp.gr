var marked = require('marked');
var jade = require('jade');
var fs = require('fs');
var rmdir = require('rimraf');

var postLayout = function (config) {
    'use strict';

    config.posts.forEach(function (post) {
        var result = jade.renderFile('./templates/posts/post.jade', {
            keywords: post.keywords.join(' '),
            author: post.author,
            categories: post.categories,
            title: config.title + ' | ' + post.title,
            description: '',
            post: marked(post.content)
        });

        post.rendered = result;
    });

    console.log('applying data to layout...');
};

var build = function (config) {
    'use strict';

    function buildLayout (posts) {
        var indexContent = jade.renderFile('./templates/posts/index.jade', {
            posts: posts
        });

        var path = config.dist + 'posts/index.html';
        fs.writeFileSync(path, indexContent, 'utf8');
    }

    function buildFiles (posts) {
        posts.forEach(function (post) {
            var path = config.dist + 'posts/' + post.filename + '.html';
            fs.writeFileSync(path, post.rendered, 'utf8');
        });
    }

    function buildIndex (posts) {
        var urls = [];

        posts.forEach(function (post) {
            var url = post.filename + '.html';
            urls.push(url);
        });

        buildLayout(urls);
        // fs.writeFileSync(path, post.rendered, 'utf8');
    }

    function buildPath () {
        rmdir.sync(config.dist);
        fs.mkdirSync(config.dist);
        fs.mkdirSync(config.dist + 'posts/');
    }

    buildPath();

    buildFiles(config.posts);
    buildIndex(config.posts);

    console.log('building posts...');
};

var generatePosts = function (config) {
    'use strict';

    postLayout(config);
    build(config);
};

var exports = module.exports = generatePosts;
