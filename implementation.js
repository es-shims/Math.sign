'use strict';

var $Number = Number;
var numberIsNaN = require('is-nan');

module.exports = function sign(value) {
	var number = $Number(value);
	if (number === 0 || numberIsNaN(number)) {
		return number;
	}
	return number < 0 ? -1 : 1;
};
