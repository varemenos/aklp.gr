var marked = require('marked');

var descriptions = function (config) {
    'use strict';

    config.posts.forEach(function (post) {
        if (!post.description) {
            var lexer = new marked.Lexer();
            var tokens = lexer.lex(post.content);
            var description = [];

            tokens.forEach(function (token) {
                if (token.type === 'paragraph') {
                    var words = token.text.split(' ');
                    words.forEach(function (word) {
                        if (description.length < 75) {
                            description.push(word);
                        }
                    });
                }
            });
            post.description = description.join(' ') + '...';
        }
    });

    console.log('    ✔ descriptions loaded [ ' + config.posts.length + ' ]');
};

var exports = module.exports = descriptions;
