import assert from 'node:assert';
import test from 'node:test';
import markdownIt from 'markdown-it';
import plugin from './index.js';

const md = markdownIt().use(plugin);

test('works', () => {
	assert.equal(
		md.render('*A* **B** _C_ __D__'),
		'<p><i>A</i> <b>B</b> <em>C</em> <strong>D</strong></p>\n',
	);
});
