module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        watch: {
            source: {
                options: {
                    debounceDelay: 250,
                    livereload: true,
                    livereloadOnError: false
                },
                files: [
                    'templates/**/*',
                    'modules/**/*',
                    'generate.js'
                ],
                tasks: ['clean:dist', 'shell:generate']
            },
            config: {
                options: {
                    reload: true
                },
                files: ['Gruntfile.js']
            }
        },
        shell: {
            generate: {
                command: "./generate.js"
            }
        },
        clean: {
            dist: ['./dist']
        }
    });
    grunt.registerTask('default', ['watch']);
};
