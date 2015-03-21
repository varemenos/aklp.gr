var _ = require('underscore');

var sort = function (config) {
    'use strict';

    config.posts = _.sortBy(config.posts, function (post) {
        var date = post.date;
        var dateNumber = date.split('/').join('');

        return -dateNumber;
    });

    console.log('    ✔ posts ordered by [date DESC] [ ' + config.posts.length + ' ]');
};

var exports = module.exports = sort;
