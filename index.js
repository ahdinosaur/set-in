module.exports = setIn;

var defaultSet = function set (object, key, value) {
  if (object) {
    object[key] = value;
  }
  return object;
}

function setIn (object, path, value) {
  if (!(path instanceof Array) || path.length === 0) {
    return;
  }

  if (!object) {
    return object;
  }

  var key = path.shift();

  var get;
  if (object.set) {
    set = object.set.bind(object);
  } else {
    set = defaultSet.bind(null, object);
  }

  console.log(object, path, value, key)

  if (path.length === 0) {
    return set(object, key, value);
  }

  if (path.length && object[key]) {
    return set(object, key, setIn(object[key], path, value));
  }
}
