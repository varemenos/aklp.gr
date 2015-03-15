var exports = module.exports = {};

var marked = require('marked');
var jade = require('jade');
var fs = require('fs');
var rmdir = require('rimraf');
var BPromise = require('bluebird');

exports.getPostPerCategory = function (categories) {
    'use strict';

    return new BPromise(function (resolve, reject) {
        try {
            var categories = [];
            global.data.posts.forEach(function (post) {
                post.categories.forEach(function (category) {
                    categories.push(category);
                });
            });

            global.data.categories = _.uniq(categories);

            resolve();
        } catch (err) {
            reject(err);
        }
    });
};

exports.applyLayout = function () {
    // 'use strict';

    // return new BPromise(function (resolve) {
    //     global.data.posts.forEach(function (post) {
    //         var result = jade.renderFile('./templates/post.jade', {
    //             keywords: post.keywords.join(' '),
    //             author: post.author,
    //             categories: post.categories,
    //             title: global.config.title + ' | ' + post.title,
    //             description: '',
    //             post: marked(post.content)
    //         });

    //         post.rendered = result;
    //     });

    //     resolve();
    // });
};

exports.build = function () {
    // 'use strict';

    // return new BPromise(function (resolve, reject) {
    //     rmdir.sync(global.config.dist);
    //     fs.mkdirSync(global.config.dist);
    //     fs.mkdirSync(global.config.dist + 'posts/');

    //     global.data.posts.forEach(function (post) {
    //         try {
    //             var path = global.config.dist + 'posts/' + post.filename + '.html';
    //             fs.writeFileSync(path, post.rendered, 'utf8');
    //         } catch(err) {
    //             reject(err);
    //         }

    //         resolve();
    //     });
    // });
};
