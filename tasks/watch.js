'use strict';

module.exports = {
    'source': {
        'options': {
            'debounceDelay': 250,
            'livereload': true,
            'livereloadOnError': false
        },
        'files': [
            'assets/scss/**/*.scss',
            'assets/js/**/*.js',
            'templates/**/*',
            'modules/**/*',
            'posts/**/*',
            'config.json',
            'generate.js'
        ],
        'tasks': [
            'build'
        ]
    },
    'config': {
        'options': {
            'reload': true
        },
        'files': [
                'tasks/**/*.js',
            'Gruntfile.js'
        ]
    }
};
