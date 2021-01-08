'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimMathSign() {
	var polyfill = getPolyfill();
	define(Math, { sign: polyfill });
	return polyfill;
};
