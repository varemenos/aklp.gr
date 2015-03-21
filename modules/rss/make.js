var Rss = require('rss');

var make = function (config) {
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

var exports = module.exports = make;
