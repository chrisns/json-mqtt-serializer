const app = require("./")
const chai = require("chai")
const _ = {
  map: require("lodash.map"),
}
chai.should();

// I'm lazy and the tests are all pretty regiment so defining this way and looping
const tests = {
  "simple object": {
    args: [
      {
        a: 1,
        b: 2,
        c: "abc"
      },
    ],
    expected: [
      {topic: "a", message: 1},
      {topic: "b", message: 2},
      {topic: "c", message: "abc"}
    ]
  },
  "deep object": {
    args: [
      {
        a: {
          b: "abc"
        },
        c: "def"
      },
    ],
    expected: [
      {topic: "a/b", message: "abc"},
      {topic: "c", message: "def"}
    ]
  },
  "deep array": {
    args: [
      {
        a: [
          "b",
          {c: "abc"}
        ],
        d: "def"
      },
    ],
    expected: [
      {topic: "a/0", message: "b"},
      {topic: "a/1/c", message: "abc"},
      {topic: "d", message: "def"}
    ]
  },
  "with prefix": {
    args: [
      {
        a: "foo"
      },
      "myprefix/"
    ],
    expected: [
      {topic: "myprefix/a", message: "foo"},
    ]
  }
}

describe("JSON>MQTT serializer", () =>
  _.map(tests, (v, k) =>
    it(`${k} test`, () =>
      app.apply({}, v.args).should.eql(v.expected)
    )
  )
)