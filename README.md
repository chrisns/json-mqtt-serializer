# Small helper to serialize json to MQTT topics

[![Build Status](https://travis-ci.org/chrisns/json-mqtt-serializer.svg?branch=master)](https://travis-ci.org/chrisns/json-mqtt-serializer)

[see the tests for detail of the formatting options](index.test.js)

Example usage:
```js
const mqttSerializer = require("json-mqtt-serializer")

const bunchOfObjects = {
    a: [
      "b",
      {c: "abc"}
    ],
    d: "def"
  }

const result = mqttSerializer(bunchOfObjects, "exampleNameSpace/")
```

Will return
```js
[
    {topic: "exampleNameSpace/a/0", message: "b"},
    {topic: "exampleNameSpace/a/1/c", message: "abc"},
    {topic: "exampleNameSpace/d", message: "def"}
]
```