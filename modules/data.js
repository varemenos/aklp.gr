var fs = require('fs');
var fse = require('fs-extra');
var path = require('path');
var _ = require('underscore');
var marked = require('marked');

var getPosts = function (config) {
    'use strict';

    config.posts = [];

    var directory = fs.readdirSync(path.resolve(config.pwd + config.path.posts));

    directory.forEach(function (file) {
        var filetype = file.substr(-('.md').length);

        if (filetype === '.md') {
            config.posts.push({
                filename: file.replace('.md', '')
            });
        }
    });

    console.log('    ✔ posts loaded [ ' + config.posts.length + ' ]');
};

var getImages = function (config) {
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

var getMetadata = function (config) {
    'use strict';

    config.posts.forEach(function (post) {
        var metadataFile = fs.readFileSync(path.resolve(config.pwd + config.path.posts + post.filename + '.json'), 'utf8');

        var metadata = JSON.parse(metadataFile);

        metadata.extension = '.md';
        metadata.path = './' + post.filename + '.html';
        metadata.image = './' + post.image;
        post = _.extend(post, metadata);
    });

    console.log('    ✔ metadata loaded [ ' + config.posts.length + ' ]');
};

var getContent = function (config) {
    'use strict';

    config.posts.forEach(function (post) {
        var postContent = fs.readFileSync(config.pwd + config.path.posts + post.filename + post.extension, 'utf8');
        post.content = postContent;
        post.rendered = marked(post.content.split('\n').splice(1).join('\n'));
    });

    console.log('    ✔ content loaded [ ' + config.posts.length + ' ]');
};

var getTitles = function (config) {
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

var getDescriptions = function (config) {
    'use strict';

    config.posts.forEach(function (post) {
        if (!post.description) {
            var lexer = new marked.Lexer();
            var tokens = lexer.lex(post.content);
            var description = [];
            var counter = 0;

            tokens.forEach(function (token) {
                if (token.type === 'paragraph') {
                    var words = token.text.split(' ');
                    words.forEach(function (word) {
                        console.log(counter++);
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

var getCategories = function (config) {
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

var sortData = function (config) {
    'use strict';

    config.posts = _.sortBy(config.posts, function (post) {
        var date = post.date;
        var dateNumber = date.split('/').join('');

        return -dateNumber;
    });

    console.log('    ✔ posts ordered by [date DESC] [ ' + config.posts.length + ' ]');
};

var data = function (config) {
    'use strict';

    console.log('  loading data...');
    getPosts(config);
    getImages(config);
    getMetadata(config);
    getContent(config);
    getTitles(config);
    getDescriptions(config);
    getCategories(config);
    sortData(config);
};

exports = module.exports = data;
