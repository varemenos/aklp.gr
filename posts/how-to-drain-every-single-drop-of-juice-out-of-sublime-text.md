# How to drain every single drop of juice out of Sublime Text

## Table of Content

1. [Prologue](#Prologue)
2. [Package Control](#Package-Control)
	* [Installation](#Installation)
	* [How to install a Package via Package Control](#How-to-install-a-Package-via-Package-Control)
3. [Packages](#Packages)
	* [Must have packages](#Must-have-packages)
		* [BracketHighlighter](#BracketHighlighter)
		* [SideBarEnhancements](#SideBarEnhancements)
		* [Package Syncing](#Package-Syncing)
		* [HTML5](#HTML5)
		* [Emmet](#Emmet)
		* [Emmet CSS Snippets](#Emmet-CSS-Snippets)
		* [Dictionaries](#Dictionaries)
		* [SublimeCodeIntel](#SublimeCodeIntel)
	* [Custom Syntax Highlighters](#Custom-Syntax-Highlighters)
		* [SCSS](#SCSS)
		* [ApacheConf.tmLanguage](#ApacheConf)
		* [Git Config](#Git-Config)
		* [INI](#INI)
		* [JavaScriptNext - ES6 Syntax](#JavascriptNext-ES6-Syntax)
	* [Themes and Schemes](#Themes-and-Schemes)
		* [Theme - Soda](#Theme-Soda)
		* [Tomorrow Color Schemes](#Tomorrow-Color-Schemes)
		* [TextMate-Kuroir-Theme](#TextMate-Kuroir-Theme)
		* [Dayle Rees Color Schemes](#Dayle-Rees-Color-Schemes)
		* [QuickThemes](#QuickThemes)
	* [Git](#Git)
		* [SideBarGit](#SideBarGit)
		* [GitGutter](#GitGutter)
		* [Gitignore](#Gitignore)
	* [Other essential and interesting Packages](#Other-essential-and-interesting-Packages)
		* [SassBeautify](#SassBeautify)
		* [LineEndings](#LineEndings)
		* [JsFormat](#JsFormat)
		* [HTMLAttributes](#HTMLAttributes)
		* [FileDiffs](#FileDiffs)
		* [EditorConfig](#EditorConfig)
		* [Autoprefixer](#Autoprefixer)
		* [sublimelint](#sublimelint)
		* [SyncedSideBar](#SyncedSideBar)
	* [More](#More)
4. [Settings](#Settings)
	* [How Settings Work](#How-Settings-Work)
	* [Settings - Default](#Settings-Default)
	* [Settings - User](#Settings-User)
	* [Syntax Specific - User](#Syntax-Specific-User)
	* [Distraction Free - User](#Distraction-Free-User)
	* [Settings - Options](#Settings-Options)
	* [My Settings](#My-Settings)
5. [Documentation](#Documentation)

---

## <a name="Prologue"></a>1. Prologue

Countless frontend developer use Sublime Text and I'm no exception. This piece of software is so awesome, functional and customizable that forces you to love it.
Anyway, in this blog post I will share some of the packages and settings I'm using daily and since they make my day so much easier (This post will focus on Sublime Text 3 since I've switched to it about a month ago).

---

## <a name="Package-Control"></a>2. Package Control

Before we dig deep into the package world of Sublime Text, let me first quote a description of what Package Control is.

> A Sublime Text 2/3 package manager for easily discovering, installing, upgrading and removing packages. Also includes an automatic updater and package creation tool. Packages can be installed from GitHub, BitBucket or custom package repositories. The plugin uses a channel and repository system to allow users to find new packages over time without any work. It also supports working with packages that were manually installed.

### <a name="Installation"></a>Installation

There are different instructions depending on the version of Sublime Text you are using:

* For v2 you can find there [here](https://sublime.wbond.net/installation#st2)
* For v3 you can find there [here](https://sublime.wbond.net/installation#st3)

### <a name="How-to-install-a-Package-via-Package-Control"></a>How to install a Package via Package Control

To install a package via Package Control you first have to display the Package Control palette which you can do by either using the shortcut `Ctrl` + `Shift` + `P` or by using the menu and going to `Preferences` -> `Package Control`. You will now be presented with the Package Control palette which offers you some options, one of them is `Package Control: Install Package`. Once you select it, the palette will display a list of available packages you can choose to install. Once you choose a package for installation, a message will appear in the status bar indicating the installation process, at the end of which you might need to restart Sublime Text so that the package can be initiated.

---

## <a name="Packages"></a>3. Packages

Most of Sublime Text's functionality comes from the Packages you decide to install. What I mean by functionality? Thats:

* build systems
* system highlighting
* themes and color schemes
* text handling functions and shortcuts + more
* Sublime Text UI enhancers
* more

__note #1__: To install these all you have to do is type the name you in the title of the package you like in the `Package Control: Install Package` feature.
__note #2__: All of these packages are supported by Sublime Text 3, and most should be supported by Sublime Text 2 as well.

### <a name="Must-have-packages"></a>Must have packages

#### <a name="BracketHighlighter"></a>BracketHighlighter

It's a bracket and tag highlighter for Sublime Text

#### <a name="SideBarEnhancements"></a>SideBarEnhancements

Enhancements to Sublime Text sidebar. Files and folders.

#### <a name="Package-Syncing"></a>Package Syncing

Keep your Sublime Test installation synchronized across different machines. It syncs your user folder and you can define which files you would like to include in the sync. You can also exclude files from the sync for example platform-depending settings or packages.

#### <a name="HTML5"></a>HTML5

HTML5 bundle for Sublime Text forked by Textmate's HTML5 bundle

#### <a name="Emmet"></a>Emmet

the essential toolkit for web-developers.
Emmet takes the snippets idea to a whole new level: you can type CSS-like expressions that can be dynamically parsed, and produce output depending on what you type in the abbreviation. Emmet is developed and optimized for web-developers whose workflow depends on HTML/XML and CSS, but can be used with programming languages too.

#### <a name="Emmet-CSS-Snippets"></a>Emmet CSS Snippets

Emmet CSS snippets for Sublime Text. Works with CSS, LESS, SCSS and Sass.

#### <a name="Dictionaries"></a>Dictionaries

Hunspell UTF8 dictionaries for Sublime Text. [Spell check]

#### <a name="SublimeCodeIntel"></a>SublimeCodeIntel

Full-featured code intelligence and smart autocomplete engine

### <a name="Custom-Syntax-Highlighters"></a>Custom Syntax Highlighters

#### <a name="SCSS"></a>SCSS

The TextMate SCSS Official Bundle. Now Compatible with SublimeText

#### <a name="ApacheConf"></a>ApacheConf.tmLanguage

You can now get your .htaccess files with syntax highlighting

#### <a name="Git-Config"></a>Git Config

syntax highlighting for git files

#### <a name="INI"></a>INI

syntax highlighting for .ini files

#### <a name="JavascriptNext-ES6-Syntax"></a>JavaScriptNext - ES6 Syntax

Better JavaScript language definition for SublimeText. This builds on the language files commonly used and adds more fine grained matching and also includes new features from ECMAScript 6 like modules, succinct methods, arrow functions, classes, and accessors (ES5).

### <a name="Themes-and-Schemes"></a>Themes and Schemes

#### <a name="Theme-Soda"></a>Theme - Soda

This is by far the most used theme of Sublime Text
Dark and light custom UI themes for Sublime Text 2 and Sublime Text 3.

#### <a name="Tomorrow-Color-Schemes"></a>Tomorrow Color Schemes

I'm always switching between Tomorrow or Tomorrow Night when writing code, it's just so easy on my eyes.

#### <a name="TextMate-Kuroir-Theme"></a>TextMate-Kuroir-Theme

I use this quite a lot when writing blog posts in markdown. This you can't find to Package Control but you can add by opening the Package Control panel, selecting `Package Control: Add Repository` and then inserting this url: `https://github.com/MarioRicalde/TextMate-Kuroir-Theme.git`. After that you can install it just like any other package listed in Package Control.

#### <a name="Dayle-Rees-Color-Schemes"></a>Dayle Rees Color Schemes

A ton of awesome color schemes
Sublime Text 2 Themes (textmate) created by Dayle Rees.

#### <a name="QuickThemes"></a>QuickThemes

QuickThemes allows you to easily cycle through any combination of Sublime Text 2 preferences. The obvious use is for changing color schemes, themes, and fonts simultaneously, but any of the ST2 preferences are available.

### <a name="Git"></a>Git

#### <a name="SideBarGit"></a>SideBarGit

Add git commands to sidebar. Textual port of komodin extension for sublime text.

#### <a name="GitGutter"></a>GitGutter

A Sublime Text 2/3 plugin to see git diff in gutter

#### <a name="Gitignore"></a>Gitignore

Gitignore plugin for Sublime Text

### <a name="Other-essential-and-interesting-Packages"></a>Other essential and interesting Packages

#### <a name="SassBeautify"></a>SassBeautify

A Sublime Text plugin that beautifies Sass files.

#### <a name="LineEndings"></a>LineEndings

On statusbar and on command palette.

#### <a name="JsFormat"></a>JsFormat

Javascript formatting for Sublime Text

#### <a name="HTMLAttributes"></a>HTMLAttributes

HTML(5) attribute completions

#### <a name="FileDiffs"></a>FileDiffs

Shows diffs between the current file, or selection(s) in the current file, and clipboard, another file, or unsaved changes.

#### <a name="EditorConfig"></a>EditorConfig

helps developers define and maintain consistent coding styles between different editors and IDEs - Sublime plugin

#### <a name="Autoprefixer"></a>Autoprefixer

Sublime plugin to prefix your CSS

#### <a name="sublimelint"></a>sublimelint

Error highlighting in Sublime Text.

#### <a name="SyncedSideBar"></a>SyncedSideBar

Sublime Text plugin to sync project sidebar (folder view) with currently active file.

### <a name="More"></a>More

For more you can check [package control's website](https://sublime.wbond.net/). It contains a list of popular, trending and new packages, it also gives you the ability to search by label or by text input.

---

## <a name="Settings"></a>4. Settings

### <a name="How-Settings-Work"></a>How Settings Work

You need to know how settings work in Sublime Text before we continue. If you open the preferences menu you will notice these options:

* Settings - Default
* Settings - User
* Settings - More
	* Syntax Specific - User
	* Distraction Free - User

#### <a name="Settings-Default"></a>Settings - Default

Settings - Default contains all the default options that Sublime Text has and is a good reference for what options are available and it also includes some inline documentation for each option.
Be careful with Settings - Default, never modify it! All the changes you make in Settings - Default will be most possibly lost after the next update. And that's why Settings - User exists.

#### <a name="Settings-User"></a>Settings - User

By default this file is empty, and it's purpose is to override options from the Settings - Default file. So when you want to override an option you add it in here.

#### <a name="Syntax-Specific-User"></a>Syntax Specific - User

These options are specific to the syntax of the current document. For example, if your currently open document has a syntax highlighting of Markdown then the by opening Syntax Specific - User from the menu will open the file that's specific to Markdown (`Markdown.sublime-settings`). It works similar to Settings - User but the options you override will be specific to Markdown files.

#### <a name="Distraction-Free-User"></a>Distraction Free - User

These options are specific to the Distraction Free mode which can be toggled via the `F11` shortcut. Just like Syntax Specific, the options you override in this file will only work when you are in Distraction Free mode.

### <a name="Settings-Options"></a>Settings - Options

Here are the available options (as of 1st of October 2013)

* `color_scheme`
* `font_face`
* `font_size`
* `font_options`
* `word_separators`
* `line_numbers`
* `gutter`
* `margin`
* `fold_buttons`
* `fade_fold_buttons`
* `rulers`
* `spell_check`
* `tab_size`
* `translate_tabs_to_spaces`
* `use_tab_stops`
* `detect_indentation`
* `auto_indent`
* `smart_indent`
* `indent_to_bracket`
* `trim_automatic_white_space`
* `word_wrap`
* `wrap_width`
* `indent_subsequent_lines`
* `draw_centered`
* `auto_match_enabled`
* `dictionary`
* `draw_minimap_border`
* `always_show_minimap_viewport`
* `highlight_line`
* `caret_style`
* `match_brackets`
* `match_brackets_content`
* `match_brackets_square`
* `match_brackets_braces`
* `match_brackets_angle`
* `match_tags`
* `match_selection`
* `line_padding_top`
* `line_padding_bottom`
* `scroll_past_end`
* `move_to_limit_on_up_down`
* `draw_white_space`
* `draw_indent_guides`
* `indent_guide_options`
* `trim_trailing_white_space_on_save`
* `ensure_newline_at_eof_on_save`
* `save_on_focus_lost`
* `atomic_save`
* `fallback_encoding`
* `default_encoding`
* `enable_hexadecimal_encoding`
* `default_line_ending`
* `tab_completion`
* `auto_complete`
* `auto_complete_size_limit`
* `auto_complete_delay`
* `auto_complete_selector`
* `auto_complete_triggers`
* `auto_complete_commit_on_tab`
* `auto_complete_with_fields`
* `auto_close_tags`
* `shift_tab_unindent`
* `copy_with_empty_selection`
* `find_selected_text`
* `auto_find_in_selection`
* `drag_text`
* `theme`
* `scroll_speed`
* `tree_animation_enabled`
* `animation_enabled`
* `highlight_modified_tabs`
* `show_tab_close_buttons`
* `bold_folder_labels`
* `use_simple_full_screen`
* `gpu_window_buffer`
* `overlay_scroll_bars`
* `hot_exit`
* `remember_open_files`
* `always_prompt_for_file_reload`
* `open_files_in_new_window`
* `create_window_at_startup`
* `close_windows_when_empty`
* `show_full_path`
* `show_panel_on_build`
* `preview_on_click`
* `folder_exclude_patterns`
* `file_exclude_patterns`
* `binary_file_patterns`
* `index_files`
* `enable_telemetry`
* `ignored_packages`

### <a name="My-Settings"></a>5. My Settings

You can check the settings I'm currently using by visiting [this link](https://github.com/varemenos/veSettingsST3).

---

## <a name="Documentation"></a>Documentation

[Documentation for Sublime Text 2](http://www.sublimetext.com/docs/2/)

[Documentation for Sublime Text 3](http://www.sublimetext.com/docs/3/)
