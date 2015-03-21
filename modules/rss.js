var path = require('path');
var fs = require('fs');
var Rss = require('rss');

var makeFeed = function (config) {
    'use strict';

    config.feed = new Rss({
        title: 'AKLP.gr blog posts',
        description: '',
        language: 'en',
        categories: config.categories,
        feed_url: 'http://aklp.gr/rss.xml',
        site_url: 'http://aklp.gr',
        image_url: 'http://aklp.gr/templates/aklpgr/assets/img/logo.jpg',
        pubDate: new Date()
    });
};

var populateFeed = function (config) {
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

var writeFeed = function (config) {
    'use strict';

    var writePath = path.resolve(config.pwd + config.dist + '/rss.xml');
    var xml = config.feed.xml({indent: true});
    fs.writeFileSync(writePath, xml);
};

var rss = function (config) {
    'use strict';

    makeFeed(config);
    populateFeed(config);
    writeFeed(config);
};

var exports = module.exports = rss;
