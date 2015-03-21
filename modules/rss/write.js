var path = require('path');
var fs = require('fs');

var write = function (config) {
    'use strict';

    var writePath = path.resolve(config.pwd + config.dist + '/rss.xml');
    var xml = config.feed.xml({indent: true});
    fs.writeFileSync(writePath, xml);
};

var exports = module.exports = write;
