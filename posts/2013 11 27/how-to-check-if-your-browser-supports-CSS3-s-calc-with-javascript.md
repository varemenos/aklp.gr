# How to check if your browser supports CSS3's calc with JavaScript

Recently I had to use CSS3's calc() value for a website I was designing and it seemed ridiculous to include a whole library (Modernizr) for just 1 CSS property's value. So I decided to write a small script to detect if calc was supported by the browsers or not (and it seems like it's rather similar to Modernizr's way of detecting it).
So, here is the script:

<pre class="line-numbers"><code class="language-javascript">// returns true if your browser supports calc()
checkCalc = function (prefix) {
	prefix = prefix || '';
	var el = document.createElement('div');
	el.style.cssText = prefix + 'width: calc(1px);';
	return !!el.style.length;
};

// returns true if your browser supports any version of calc(), prefixed or not
checkAllCalc = function () {
	return checkCalc('-webkit-') || checkCalc('-moz-') || checkCalc();
};</code></pre>

Now you can:

1. check webkit prefixed support
<pre class="line-numbers"><code class="language-javascript">checkCalc('-webkit-');</code></pre>
2. check moz prefixed support
<pre class="line-numbers"><code class="language-javascript">checkCalc('-moz-');</code></pre>
3. check unprefixed/spec support
<pre class="line-numbers"><code class="language-javascript">checkCalc();</code></pre>
4. or all of the above
<pre class="line-numbers"><code class="language-javascript">checkAllCalc();</code></pre>
