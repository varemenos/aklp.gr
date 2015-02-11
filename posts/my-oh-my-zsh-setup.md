# My oh-my-zsh setup

As a web-developer using a terminal became a daily routine quite soon and after a while I realized that I had to start making a terminal setup for myself. What I was looking for was something that would help me raise my productivity by either avoiding various annoyances that I've encountered throughout the journey or by including tools that I didn't use before that would smoothen the road ahead. After a lot of digging for the right tools, I came across [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) which is "A community-driven framework for managing your zsh configuration,". What that means? basically it loads various ZSH shell scripts which it then configures for you.

## Getting ZSH and oh-my-zsh

All you have to do to get started, is to install the "zsh" package via your distro's package manager and then install oh-my-zsh by following the simple instructions written in it's [github](https://github.com/robbyrussell/oh-my-zsh#setup) page.

Now that you've done installing it let me tell you how to configure oh-my-zsh and then we can get started. Almost all the configuration is done in the .zshrc file that's located in your home directory (hidden by default because it's first character starts with a dot "."). Inside there you write how you want to configure your zsh/oh-my-zsh setup. So without any further ado let's see what I've changed in my ~.zshrc file and why.

## Configure ZSH

### Load oh-my-zsh plugins

<script src="https://gist.github.com/varemenos/9632120.js"></script>

Here I load all the oh-my-zsh plugins that fit my needs. That includes popular tools like ruby and node.js (via nvm & rbenv), git, an ssh-agent which adds my ssh key on the first load, of course npm and gem package managers for the previously mentioned ruby and node.js plus bower the front-end package manager. I also use the plugins "last-working-dir" to remember my last working directory everything I re-open the terminal, "autoenv" for executing ".env" files while I navigate in a directory that contains them, "command-not-found" which suggests possible package names for the invalid command I've just executed and "zsh-syntax-highlighting" for live syntax highlighting in the terminal.

### Alias fix

<script src="https://gist.github.com/varemenos/9632134.js"></script>

This alias fixes a really annoying bug I had which wouldn't allow me to run my personal aliases whenever I tried to execute those aliases via sudo.

### Oh-my-zsh settings customization

<script src="https://gist.github.com/varemenos/9632153.js"></script>

A simple configuration of oh-my-zsh, most of them are self-explanatory. There are also 2 lines of exports, one being the PATH and then other CHROME_BIN which is due to a bug with karma detected Chrome stable in ArchLinux.

### Application Aliases

<script src="https://gist.github.com/varemenos/9632177.js"></script>

> gedit=sublime_text

haters gonna hate.

### Action Aliases

<script src="https://gist.github.com/varemenos/9632199.js"></script>

Quick untarring, pb-actions compatibility for linux distros and removal of orphan packages for ArchLinux.

### Package Manager Aliases

<script src="https://gist.github.com/varemenos/9632225.js"></script>

Currently only checks whether the user uses Redhat or Debian systems (apt-get versus yum) and decides which of the aliases to load. The aliases themselves are just shortcuts of the package-manager's actions.

### Git Aliases

<script src="https://gist.github.com/varemenos/9632243.js"></script>

I do too much git, and with these I save quite a few keystrokes.

### Functions

<script src="https://gist.github.com/varemenos/9632251.js"></script>

Quite useful functions, mkd creates a directory and then enters it and zombie checks for zombie processes and prints their process ids.
