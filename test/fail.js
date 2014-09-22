/* Modules */

var test = require('tape');

/* Tests */

test('1 === 2', function(assert) {
  assert.plan(1);
  assert.equal(1, 2);
});

test('2 === 1', function(assert) {
  assert.plan(1);
  assert.equal(2, 1);
});

test('{a: 404} === {a: 42}', function(assert) {
  assert.plan(1);
  assert.deepEqual({a: 404}, {a: 42});
});

test('"Hell, world!" === "Hello, world!"', function(assert) {
  assert.plan(1);
  assert.equal("Hell, world!", "Hello, world!");
})
