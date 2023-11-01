# markdown_it_ib

[![deno.land](https://deno.land/badge/markdown_it_ib/version)](https://deno.land/x/markdown_it_ib)
[![License](https://img.shields.io/npm/l/markdown-it-ib.svg)](https://deno.land/x/markdown_it_ib@1.0.3/LICENSE.md?source)

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

## ❌ Deprecated

The dedicated Deno version of this module is deprecated
and will not receive any updates anymore.
Please use the following instead:

```js
import markdownItIB from "npm:markdown-it-ib@VERSION";
```

## Usage

```js
import markdownIt from "npm:markdown-it";
import markdownItIB from "https://deno.land/x/markdown_it_ib@1.0.3/mod.js";

const md = markdownIt()
  .use(markdownItIB);

const output = md.render("*A* **B** _C_ __D__");
console.log(output);
```

## See also

- _[You’re using &lt;em> wrong](https://blog.logrocket.com/youre-using-em-wrong/)_
  by Facundo Corradini
