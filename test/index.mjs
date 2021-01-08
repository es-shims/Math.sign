import sign, * as signModule from 'math.sign';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(sign, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(signModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = signModule;
	t.equal(await import('math.sign/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.sign/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.sign/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
