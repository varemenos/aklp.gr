var exports = module.exports = {};

var marked = require('marked');
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

exports.getDates = function () {
    'use strict';

    return new BPromise(function (resolve, reject) {
        try{
            var dates = fs.readdirSync(config.posts.path);

            resolve(dates);
        } catch (err) {
            reject(err);
        }
    });
};

exports.getMetadata = function (dates) {
    'use strict';

    return new BPromise(function (resolve, reject) {
        try{
            var posts = [];

            dates.forEach(function (date) {
                var directory = fs.readdirSync(config.posts.path + date);

                directory.forEach(function (file) {
                    if (file.substr(-config.posts.extension.length) === config.posts.extension) {
                        posts.push({
                            filename: file.replace(config.posts.extension, ''),
                            date: date,
                            extension: config.posts.extension
                        });
                    }
                });
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
                var postData = fs.readFileSync(config.posts.path + post.date + '/' + post.filename + config.posts.extension, 'utf8');
                post.data = postData;
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
                var tokens = marked.lexer(post.data);

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
                keywords: 'a, b, c',
                author: 'Adonis K.',
                title: config.title + ' | ' + post.title,
                description: '',
                post: marked(post.data)
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
