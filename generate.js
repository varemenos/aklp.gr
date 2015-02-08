var marked = require('marked');
var jade = require('jade');
var fs = require('fs');

// var highlight = require('highlight.js');

marked.setOptions({
	renderer: new marked.Renderer()
	// highlight: function (code) { return highlight.highlightAuto(code).value; }
});

var layout = fs.readFileSync('./templates/layout.jade', 'utf8');

var result = jade.render(layout, {
});

console.log(result);
