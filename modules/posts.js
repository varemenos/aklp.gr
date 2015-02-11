var exports = module.exports = {};

var marked = require('marked');
var _ = require('underscore');
var jade = require('jade');
var fs = require('fs');
var rmdir = require('rimraf');
var BPromise = require('bluebird');
var config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

exports.generate = function () {
    'use strict';

    return new BPromise(function (resolve) {
        resolve();
    });
};

exports.getPosts = function () {
    'use strict';

    return new BPromise(function (resolve, reject) {
        try{
            var posts = [];
            var directory = fs.readdirSync(config.posts.path);

            directory.forEach(function (file) {
                if (file.substr(-config.posts.extension.length) === config.posts.extension) {
                    posts.push({
                        filename: file.replace(config.posts.extension, '')
                    });
                }
            });

            resolve(posts);
        } catch (err) {
            reject(err);
        }
    });
};

exports.getMetadata = function (posts) {
    'use strict';

    return new BPromise(function (resolve, reject) {
        try{

            posts.forEach(function (post) {
                var metadata = JSON.parse(fs.readFileSync(config.posts.path + post.filename + '.json', 'utf8'));
                metadata.extension = config.posts.extension;
                post = _.extend(post, metadata);
            });

            resolve(posts);
        } catch (err) {
            reject(err);
        }
    });
};

exports.getContent = function (posts) {
    'use strict';

    return new BPromise(function (resolve, reject) {
        try{
            posts.forEach(function (post) {
                var postContent = fs.readFileSync(config.posts.path + post.filename + config.posts.extension, 'utf8');
                post.content = postContent;
            });

            resolve(posts);
        } catch (err) {
            reject(err);
        }
    });
};

exports.getTitles = function (posts) {
    'use strict';

    return new BPromise(function (resolve, reject) {
        try {
            posts.forEach(function (post) {
                var tokens = marked.lexer(post.content);

                tokens.forEach(function (token) {
                    if (token.type === 'heading' && token.depth === 1) {
                        post.title = token.text;
                    }
                });
            });

            resolve(posts);
        } catch (err) {
            reject(err);
        }
    });
};

exports.applyLayout = function (posts) {
    'use strict';

    return new BPromise(function (resolve, reject) {
        posts.forEach(function (post) {
            var result = jade.renderFile('./templates/post.jade', {
                keywords: post.keywords.join(' '),
                author: post.author,
                categories: post.categories,
                title: config.title + ' | ' + post.title,
                description: '',
                post: marked(post.content)
            });

            post.rendered = result;
        });

        resolve(posts);
    });
};

exports.build = function (posts) {
    'use strict';

    return new BPromise(function (resolve, reject) {
        rmdir.sync(config.posts.dist);
        fs.mkdirSync(config.posts.dist);
        fs.mkdirSync(config.posts.dist + 'posts/');

        posts.forEach(function (post) {
            try {
                var path = config.posts.dist + 'posts/' + post.filename + '.html';
                fs.writeFileSync(path, post.rendered, 'utf8');
            } catch(err) {
                reject(err);
            }

            resolve(posts);
        });
    });
};
