var test = require('tape')

test('1 === 1', function(assert) {
  assert.plan(1)
  assert.equal(1, 1)
})

test('2 === 2', function(assert) {
  assert.plan(1)
  assert.equal(2, 2)
})
