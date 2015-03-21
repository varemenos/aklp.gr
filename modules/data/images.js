var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');

var images = function (config) {
    'use strict';

    config.posts.forEach(function (post) {
        var directory = fs.readdirSync(path.resolve(config.pwd + config.path.posts));

        directory.forEach(function (file) {
            var isMarkdown = file.indexOf('.md', file.length - 3) !== -1;
            var isJson = file.indexOf('.json', file.length - 5) !== -1;

            if (!isMarkdown && !isJson) {
                if (post.filename === file.slice(0, -4)) {
                    post.image = file;

                    var src = path.resolve(config.pwd + config.path.posts + file);
                    var dest = path.resolve(config.pwd + config.dist + config.path.posts + file);

                    fse.copySync(src, dest);

                    return;
                }
            }
        });
    });

    console.log('    ✔ images loaded [ ' + config.posts.length + ' ]');
};

var exports = module.exports = images;
