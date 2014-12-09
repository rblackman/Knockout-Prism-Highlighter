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

```html
<pre><code data-bind="highlight: myCode, language: 'language-markup'"></code></pre>
```

