module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    var tasks = require('load-grunt-configs')(grunt, {
        config: {
            src: './tasks/**/*.js'
        }
    });

    grunt.initConfig(tasks);

    grunt.registerTask('build', [
      'sass',
      'autoprefixer',
      'uglify',
      'shell:generate'
    ]);
    grunt.registerTask('default', ['watch']);
};
