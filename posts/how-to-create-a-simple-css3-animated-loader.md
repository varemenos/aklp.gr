# How to create a simple CSS3 animated loader

## Preface

In this blog-post/tutorial I will show you how to create a simple CSS3 animated loader by only using 1 HTML element. A couple of months ago a lets-create-css3-loaders trend was initiated in codepen with a lot of people trying to create impressive and functional CSS3 Loaders. So as a CSS3 enthusiast I accepted the challenge and created a couple of them ([#1](http://codepen.io/varemenos/pen/EeulL), [#2](http://codepen.io/varemenos/pen/oJLge)). Using one of these 2 creations I will be showing you how to create the 1st one which requires just 1 element.

## Why use only 1 element?

* Usually because it's a challenge and therefore helps you hone your skills
* A lot of CSS developers prefer to create CSS-objects that are reusable (for example my SASS Library called [veRepo](https://github.com/varemenos/verepo) tries to implement just that although sometimes using more than 1 element is simply inevitable)

## The markup

As mentioned before for the markup we are only going to use 1 element with the class of `spinner`

<pre class="line-numbers"><code class="language-markup">&lt;span class="spinner">&lt;/span></code></pre>

## The CSS

For CSS we need to use the triangle CSS trick that became viral a couple of years ago in which we will then add a border radius to get the the rough edges removed. After that we will add a CSS3 animation which will spin the element around itself by using `transform: rotate()`.

<pre class="line-numbers"><code class="language-css">.spinner {
	display: inline-block;
	width: 0;
	height: 0;
	border: solid 30px;
	border-radius: 5em;
	border-color: #0099ff transparent #0099ff transparent;
	animation: spin 1s linear infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}</code></pre>

### Alternative Style

<pre class="line-numbers"><code class="language-css">.spinner {
	display: inline-block;
	width: 0;
	height: 0;
	border: solid 30px;
	border-radius: 5em;
	border-color: transparent transparent #0099ff transparent;
	animation: spin 1s linear infinite;
}</code></pre>

### Demo

<iframe src="http://codepen.io/varemenos/full/EeulL" frameborder="0" style="width: 100%; height: 300px; padding: 0; box-sizing: border-box;"></iframe>
