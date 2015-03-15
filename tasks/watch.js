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
      'config.json',
      'generate.js'
    ],
    'tasks': [
      'shell:generate'
    ]
  },
  'config': {
    'options': {
      'reload': true
    },
    'files': [
      'Gruntfile.js'
    ]
  }
};
