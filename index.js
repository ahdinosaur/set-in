module.exports = setIn;

function setIn (object, path, value) {
  if (!object || !Array.isArray(path)) {
    return
  }

  var original = object

  for (var i = 0, len = path.length - 1; i < len; i++) {
    object = (object || {}) && object[path[i]]
  }

  if (typeof object !== 'object') {
    return false
  }

  var key = path[i]

  if(key === '-') {
    if(!Array.isArray(object)) {
      return
    }

    object[object.length] = value

  } else {
    object[key] = value

  }

  return original
}
