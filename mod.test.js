import { assertEquals } from 'https://deno.land/std@0.161.0/testing/asserts.ts';
import markdownIt from 'npm:markdown-it@13.0.1';
import plugin from './mod.js';

const md = markdownIt().use(plugin);

Deno.test('Works', () => {
	assertEquals(
		md.render('*A* **B** _C_ __D__'),
		'<p><i>A</i> <b>B</b> <em>C</em> <strong>D</strong></p>\n',
	);
});
