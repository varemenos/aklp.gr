var fs = require('fs');
var path = require('path');
var jade = require('jade');

var index = function (config) {
    'use strict';

    var build = function (posts) {
        var indexContent = jade.renderFile('./templates/posts/index.jade', {
            posts: posts
        });

        fs.writeFileSync(path.resolve(config.pwd + config.dist + config.path.posts + '/index.html'), indexContent, 'utf8');
    };

    build(config.posts);
};

var exports = module.exports = index;
