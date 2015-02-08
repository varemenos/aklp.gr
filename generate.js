var marked = require('marked');
var jade = require('jade');
var fs = require('fs');

// var highlight = require('highlight.js');

marked.setOptions({
	renderer: new marked.Renderer()
	// highlight: function (code) { return highlight.highlightAuto(code).value; }
});

var header = fs.readFileSync('./templates/header.jade', 'utf8');

var result = jade.render(header, {});

console.log(result);
