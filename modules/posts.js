var fs = require('fs');
var rmdir = require('rimraf');

var post = require('./posts/post');
var index = require('./posts/index');

var posts = function (config) {
    'use strict';

    function buildPath () {
        try {
            rmdir.sync(config.pwd + config.dist);
            fs.mkdirSync(config.pwd + config.dist);
            fs.mkdirSync(config.pwd + config.dist + config.path.posts);
        } catch (e) {
            throw e;
        }
    }

    buildPath();
    post(config);
    index(config);
};

var exports = module.exports = posts;
