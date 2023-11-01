'use strict';

function render(tokens, idx, options, _env, self) {
	const token = tokens[idx];
	if (token.markup === '*') token.tag = 'i';
	else if (token.markup === '**') token.tag = 'b';
	return self.renderToken(tokens, idx, options);
}

module.exports = function (md) {
	md.renderer.rules.em_open = render;
	md.renderer.rules.em_close = render;
	md.renderer.rules.strong_open = render;
	md.renderer.rules.strong_close = render;
};
