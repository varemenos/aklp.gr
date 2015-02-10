#!/usr/local/bin/node

var marked = require('marked');
var jade = require('jade');
var fs = require('fs');
var mkdirp = require('mkdirp');
var Promise = require('bluebird');

// var highlight = require('highlight.js');

marked.setOptions({
	renderer: new marked.Renderer()
	// highlight: function (code) { return highlight.highlightAuto(code).value; }
});

var config = {
    'path': './posts/',
    'dist': './build/',
    'extension': '.md'
};

var layout = fs.readFileSync('./templates/layout.jade', 'utf8');

var generateBlog = function () {
    'use strict';

    return new Promise(function (resolve, reject) {
        var directory = fs.readdirSync(config.path);

        if (directory) {
            resolve(directory);
        } else {
            reject();
        }
    });
};

var getPostNames = function (directory) {
    'use strict';


    return new Promise(function (resolve, reject) {
        var posts = directory.filter(function (file) {
            return file.substr(-config.extension.length) === config.extension;
        });

        if (!posts.length) {
            reject();
        }

        resolve(posts);
    });
};

var getPosts = function (posts) {
    'use strict';

    return new Promise(function (resolve, reject) {
        posts = posts.map(function (post) {
            var postName = post.replace(config.extension, '');
            var postData = fs.readFileSync(config.path + postName + config.extension, 'utf8');

            return {
                name: postName,
                data: postData,
                extension: config.extension
            };
        });

        if (!posts.length) {
            reject();
        }

        resolve(posts);
    });
};

var buildPosts = function (posts) {
    'use strict';

    return new Promise(function (resolve, reject) {
        mkdirp(config.dist, function (err) {
            if (err) {
                reject();
            } else {
                posts.forEach(function (post) {
                    try {
                        fs.writeFileSync(config.dist + post.name + '.html', marked(post.data), 'utf8');
                    } catch(err) {
                        reject(err);
                    }

                    resolve();
                });
            }
        });
    });
};

generateBlog(config.path)
    .then(getPostNames)
    .then(getPosts)
    .then(buildPosts);

// var result = jade.render(layout, {
//     keywords: 'a, b, c',
//     author: 'Adonis K.',
//     description: ''
// });

// console.log(result);
