'use strict';

module.exports = {
    dist: {
        options: {
            style: 'compact'
        },
        files: {
            'assets/css/style.css': 'assets/scss/style.scss',
            'assets/css/libs.css': [
                'assets/scss/prism.scss'
            ]
        }
    }
};
