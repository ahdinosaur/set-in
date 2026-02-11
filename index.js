var assert = require('assert')

module.exports = setIn

function setIn (object, path, value) {
  assert.equal(typeof object, 'object', 'setIn: expected object as first argument.')
  assert.ok(Array.isArray(path), 'setIn: expected array path as second argument.')
  assert.ok(
    path.every(p => typeof p === 'number' || typeof p === 'string'),
    'setIn: expected array path (of strings and numbers) as second argument.'
  )

  return recursivelySetIn(object, path, value, 0)
}

function recursivelySetIn (object, path, value, index) {
  if (index === path.length) {
    return value
  }

  object = object || {}

  var key = path[index]

  // CVE-2020-28273
  if (key === 'constructor' || key === 'prototype' || key === '__proto__') {
    throw `setIn: ${key} is disallowed in path due to possible prototype pollution attack.`
  }

  if (key === '-') {
    assert.ok(Array.isArray(object), 'setIn: "-" in path must correspond to array.')
    key = object.length
  }

  var next = recursivelySetIn(object[key], path, value, ++index)

  set(object, key, next)

  return object
}

function set (object, key, value) {
  object[key] = value
  return object
}
