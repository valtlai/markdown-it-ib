# markdown-it-ib

[![NPM](https://img.shields.io/npm/v/markdown-it-ib.svg)](https://www.npmjs.com/package/markdown-it-ib)

A [markdown-it](https://github.com/markdown-it/markdown-it) plugin
to use `*` for `<i>` and `**` for `<b>` in your Markdown documents,
along with the conventional `_` for `<em>` and `__` for `<strong>`.

Example input:

```
*A* **B** _C_ __D__
```

Output:

```html
<p><i>A</i> <b>B</b> <em>C</em> <strong>D</strong></p>
```

## Install

```
npm install markdown-it-ib
```

## Usage

```js
import markdownIt from 'markdown-it';
import markdownItIB from 'markdown-it-ib';
// OR
const markdownIt = require('markdown-it');
const markdownItIB = require('markdown-it-ib');

const md = markdownIt()
	.use(markdownItIB);

const output = md.render('*A* **B** _C_ __D__');
console.log(output);
```

## See also

- _[You’re using &lt;em> wrong](https://blog.logrocket.com/youre-using-em-wrong/)_
  by Facundo Corradini
