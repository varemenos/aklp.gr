var marked = require('marked');

var titles = function (config) {
    'use strict';

    var lexer = new marked.Lexer();

    config.posts.forEach(function (post) {
        var tokens = lexer.lex(post.content);

        tokens.forEach(function (token) {
            if (token.type === 'heading' && token.depth === 1) {
                post.title = token.text;
            }
        });
    });

    console.log('    ✔ titles loaded [ ' + config.posts.length + ' ]');
};

var exports = module.exports = titles;
