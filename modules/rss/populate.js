var populate = function (config) {
    'use strict';

    config.posts.forEach (function (post) {
        config.feed.item({
            title: post.title,
            description: post.description,
            author: post.author,
            date: new Date(post.date),
            url: config.url + config.path.posts + post.filename + '.html',
            categories: post.categories
        });
    });
};

var exports = module.exports = populate;
