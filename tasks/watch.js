'use strict';

module.exports = {
  'source': {
    'options': {
      'debounceDelay': 250,
      'livereload': true,
      'livereloadOnError': false
    },
    'files': [
      'templates/**/*',
      'modules/**/*',
      'posts/**/*',
      'config.json',
      'generate.js'
    ],
    'tasks': [
      'shell:generate'
    ]
  },
  'css': {
    'options': {
      'debounceDelay': 250,
      'livereload': true
    },
    'files': [
      'assets/scss/**/*.scss'
    ],
    'tasks': [
      'sass',
      'autoprefixer',
      'shell:generate'
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
