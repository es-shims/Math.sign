'use strict';

var sign = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(sign, t);

	t.end();
});
