var _ = require('underscore');

var categories = function (config) {
    'use strict';

    var categories = [];
    config.posts.forEach(function (post) {
        post.categories.forEach(function (category) {
            categories.push(category);
        });
    });

    config.categories = _.uniq(categories);

    console.log('    ✔ categories loaded [ ' + config.posts.length + ' ]');
};

var exports = module.exports = categories;
