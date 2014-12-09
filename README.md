Knockout-Prism-Highlighter
==========================

A [knockout.js](http://knockoutjs.com/) binding to do syntax highlighting using [prism.js](http://prismjs.com/).

Dependencies
------------

* [knockout.js](http://knockoutjs.com/) - Developed against v3.2.0
* [prism.js](http://prismjs.com/)

Usage
-----

###Parameters

* *highlight* (required) - The code to highlight
* *language* - The language to use for syntax highlighting

###Example

Highlight a block of code:
```html
<pre><code data-bind="highlight: foo, language: 'language-markup'"></code></pre>
```

Highlight code inline:
```html
<p>Lorem ipsum <code data-bind="highlight: foo, 'language-css'"></code>dolor sit</p>
```

You can use this binding trigger prism syntax highlighting for static content. This is questionably useful since Prism does this automatically. However, if you want to specify a language this way for consistancy it is available.

```html
<pre><code data-bind="highlight, language: 'language-markup'">foo</code></pre>
```
