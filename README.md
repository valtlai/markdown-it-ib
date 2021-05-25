# markdown-it-ib

A [markdown-it](https://github.com/markdown-it/markdown-it) plugin
to use `*` for `<i>` and `**` for `<b>` in your Markdown documents,
along with the conventional `_` for `<em>` and `__` for `<strong>`.

Example input:

```md
*A* **B** _C_ __D__
```

Output:

```html
<p><i>A</i> <b>B</b> <em>C</em> <strong>D</strong></p>
```

## Usage

### Deno

```js
import markdownIt from "https://esm.sh/markdown-it@12.0.6";
import markdownItIB from "https://deno.land/x/markdown_it_ib@1.0.0/mod.js";

const md = markdownIt()
  .use(markdownItIB);

const output = md.render("*A* **B** _C_ __D__");
console.log(output);
```

### Node.js

```sh
$ npm install markdown-it-ib
```

```js
import markdownIt from "markdown-it";
import markdownItIB from "markdown-it-ib";
// OR
const md = require("markdown-it");
const markdownItIB = require("markdown-it-ib");

const md = markdownIt()
  .use(markdownItIB);

const output = md.render("*A* **B** _C_ __D__");
console.log(output);
```

## See also

- [deno.land/x](https://deno.land/x/markdown_it_ib)
- [npm registry](https://www.npmjs.com/package/markdown-it-ib)
- [*You’re using &lt;em> wrong*](https://blog.logrocket.com/youre-using-em-wrong/)
  by Facundo Corradini
