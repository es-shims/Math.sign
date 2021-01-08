'use strict';

module.exports = function (sign, t) {
	t.test('should be correct', function (st) {
		st.equal(sign(1), 1, 'sign(1)');
		st.equal(sign(String(1)), 1, 'sign(String(1))');
		st.equal(sign(Infinity), 1, 'sign(Infinity)');
		st.equal(sign(String(Infinity)), 1, 'sign(String(Infinity))');
		st.equal(sign(true), 1, 'sign(true)');

		st.equal(sign(-1), -1, 'sign(-1)');
		st.equal(sign(String(-1)), -1, 'sign(String(-1))');
		st.equal(sign(-Infinity), -1, 'sign(-Infinity)');
		st.equal(sign(String(-Infinity)), -1, 'sign(String(-Infinity))');

		st.equal(sign(+0), +0, 'sign(+0)');
		st.equal(sign('0'), +0, "sign('0')");
		st.equal(sign('+0'), +0, "sign('+0')");
		st.equal(sign(''), +0, "sign('')");
		st.equal(sign(' '), +0, "sign(' ')");
		st.equal(sign(null), +0, 'sign(null)');
		st.equal(sign(false), +0, 'sign(false)');
		st.equal(sign(-0), -0, 'sign(-0)');
		st.equal(sign('-0'), -0, "sign('-0')");
		st.equal(sign(NaN), NaN, 'sign(NaN)');
		st.equal(sign('NaN'), NaN, "sign('NaN')");
		st.equal(sign(undefined), NaN, 'sign(undefined)');

		st.end();
	});
};
