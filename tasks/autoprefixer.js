'use strict';

module.exports = {
    options: {
        map: true,
        browsers: [
            'last2 versions',
            'ff>= 4',
            'Chrome>= 5',
            'Safari>= 5.1',
            'ie>= 9',
            '>0.5%'
        ]
    },
    dist: {
        files: {
            'assets/css/style.css': 'assets/css/style.css'
        }
    }
};
