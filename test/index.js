var test = require('tape');
var setIn = require('../');

test("non-Array path", function (t) {
  t.equal(setIn({ "a": { "b": "c" }}, undefined), undefined);
  t.equal(setIn({ "a": { "b": "c" }}, "a.b"), undefined);
  t.equal(setIn({ "a": { "b": "c" }}, { "a": "b"}), undefined);
  t.end();
});

test("a simple overwrite", function (t) {
  t.equal(
    setIn(
      {
        "a": "b",
      },
      ["a"],
      "c"
    ),
    {
      "a": "c",
    }
  );
  t.end();
});

/*

test("a two-level path", function (t) {
  t.equal(
    setIn(
      {
        "a": {
          "b": "c",
        },
      },
      ["a", "b"]
    ),
    "c"
  );
  t.end();
});

test("a two-level path into arrays", function (t) {
  t.equal(
    setIn(
      [
        "a",
        [
          "b",
          "c",
        ],
      ],
      [1, 1]
    ),
    "c"
  );
  t.end();
});

test("an unresolved path", function (t) {
  t.equal(
    setIn(
      {
        "a": {
          "b": "c",
        },
      },
      ["a", "x"]
    ),
    undefined
  );
  t.end();
});

test("a path that resolves to undefined property", function (t) {
  t.equal(
    setIn(
      {
        "a": {
          "b": undefined,
        },
      },
      ["a", "b"]
    ),
    undefined
  );
  t.end();
});

test("a path that resolves to null property", function (t) {
  t.equal(
    setIn(
      {
        "a": {
          "b": null,
        },
      },
      ["a", "b"]
    ),
    null
  );
  t.end();
});

test("object with custom get function", function (t) {
  function Obj (props) {
    this.props = props;
  }
  Obj.prototype.get = function get (key) {
    return this.props[key];
  };

  t.equal(
    setIn(
      new Obj({
        "a": new Obj({
          "b": "c"
        }),
      }),
      ["a", "b"]
    ),
    "c"
  );
  t.end();
});

*/
