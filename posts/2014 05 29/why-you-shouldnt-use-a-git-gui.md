# Why you shouldn't use a GIT GUI

## Why

Well, the title is a bit misleading, you can use a GUI but you shouldn't do it without first knowing how the Git CLI (command line interface) actually works.

I understand how difficult git can be (I've been there) (I'm pretty sure I'm still there) but if you start using the various GUI tools out there, you will almost certainly never understand how git works. I've seen a lot of my friends and colleagues do the same "mistake" and they eventually come asking for my help once their GUI f**ked something up... (you could say it's the same "mistake" someone does when they start learning JQuery without first knowing JavaScript).

## It's time to decide

Once you've learned how to use Git via the terminal, you then can either use a GUI or keep using the terminal via an alternative way which makes git a little less annoying.

What I always believed was the cause of Git CLI being annoying was due to it making us type a lot! but then I've learned about and started using git aliases via [dotfiles.github.io](http://dotfiles.github.io/), at that moment my (dev)life got so much easier (and faster!). BUT then I thought since I'm already using aliases, why not use bash aliases as well?

## How to save 5 characters

Let's say, I want to see the status of my working copy. I could do that via `git status` or `git status -s`\* but that would make me type 10~13 characters  (\*: `git status -s` gives the output in the short-format).

Git aliases to the rescue! Git aliases allow you to alias a git parameter into another (usually shorter) parameter name (an alias). for example, we can alias the `status` parameter to `s` and therefore shortening the terminal command from `git status` to `git s`. Now if we use the bash aliases we can turn `git` to `g` and now we can use `g s` to check the git status.


## We must go deeper

Now you can add the bash alias `gs` for the `g s` alias which is a bash alias of a git alias of a git parameter, which is extremely silly and might seem redundant but once you get the grip of git, you will be able to do your work via the terminal without the use of any GUI and even do it faster!

## Every developer loves examples and code snippets

How you'd add a `index.html` file, commit and then push it via the git CLI:

	$ git add index.html
	$ git commit -m "initial commit, added index.html"
	$ git push

And how I do it:

	$ ga index.html
	$ gc -m "initial commit, added index.html"
	$ gp

How I actually do it:

	$ ga index.html && gc -m "initial commit, added index.html" && gp

## dotfiles

My ~/.gitconfig file includes these aliases:

	[alias]
		a = add
		b = branch
		bi = bisect
		c = commit
		cl = clone
		co = checkout
		d = diff
		f = fetch
		g = grep
		i = init
		l = log
		m = merge
		mv = mv
		p = push
		pl = pull
		r = reset
		rb = rebase
		rm = rm
		s = status
		sh = show
		t = tag
		ws = status -s

And my ~/.zshrc file includes these:

	alias ga='g a'
	alias gb='g b'
	alias gbi='g bi'
	alias gc='g c'
	alias gcl='g cl'
	alias gco='g co'
	alias gd='g d'
	alias gf='g f'
	alias gg='g g'
	alias gi='g i'
	alias gl='g l'
	alias gm='g m'
	alias gmv='g mv'
	alias gp='g p'
	alias gpl='g pl'
	alias gr='g r'
	alias grb='g rb'
	alias grm='g rm'
	alias gs='g s'
	alias gsh='g sh'
	alias gt='g t'
	alias gws='g ws'
