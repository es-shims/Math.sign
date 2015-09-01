var test = require('tape');

var original = Math.sign;

Math.sign = null;

var sign = require('./');

function eq(result, expected){
    test(result, function(t){
        t.plan(1),
        t.ok(result === expected || isNaN(result) && isNaN(expected), 'got expected value');
    });
}

eq(sign(1), original(1));
eq(sign(-1), original(-1));
eq(sign(1.5), original(1.5));
eq(sign(-1.5), original(-1.5));
eq(sign(2), original(2));
eq(sign(-2), original(-2));
eq(sign(NaN), original(NaN));
eq(sign('1'), original('1'));
eq(sign('-1'), original('-1'));
eq(sign(true), original(true));
eq(sign(false), original(false));
eq(sign('foo'), original('foo'));