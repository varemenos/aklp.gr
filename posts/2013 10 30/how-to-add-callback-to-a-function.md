# How to add callback to a function

We all know and love JQuery's callback and since I love it so much I wanted to replicate when I started recreating [codemagic](https://github.com/varemenos/codemagic). It seems like it's rather easy to do, all you have to do is add another parameter named `callback` (you can name it whatever you want, I just prefer it this way) and after checking wether the parameter is a function, execute it before the end of the container function.
Here is an example:

<pre class="line-numbers"><code class="language-javascript">// create a function that can take 2 parameters,
// a target variable
// and an optional callback function
increase = function (target, callback) {
	// incrase target's height by 10%
	target.style.height = target.style.height * 1.1 || '150px';

	// and if the the callback parameter exists and is a type of function
	if (callback && typeof callback == 'function') {
		// call it
		callback();
	}
};

// usage example
var body = document.querySelector('body');
increase(body, function() {
	console.log(body.style.height);
});</code></pre>
