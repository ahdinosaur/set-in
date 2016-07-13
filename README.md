# set-in

set value of nested associative structure given array of keys

inspired by [clojure.core/assoc-in](http://clojuredocs.org/clojure.core/assoc-in).

```
npm install --save set-in
```

## example

```
var setIn = require('set-in')
var obj = { foo: { bar: 'baz' } }

obj = setIn(obj, ['foo', 'bar'], 'newValue')
// obj === { foo: { bar: 'newValue' } }

obj = setIn(obj, ['foo', 'newKey'], 'cool')
// obj === { foo: { bar: 'newValue', newKey: 'cool' } }

obj = { foo: ['bar', 'baz'] }

obj = setIn(obj, ['foo', '-'], 'newValue')
// obj === { foo: ['bar', 'baz', 'newValue'] }
```

## usage

### `setIn = require('set-in')`

### `obj = setIn(obj, path, value)`

## license

The Apache License

Copyright &copy; 2016 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
