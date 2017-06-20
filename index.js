const _ = {
  map: require("lodash.map"),
  isObject: require("lodash.isobject"),
  isArray: require("lodash.isarray"),
  flattenDeep: require("lodash.flattendeep")
}

const app = (input, prefix = '') => _.flattenDeep(_.map(input, (v, k) => {
  if (_.isObject(v) || _.isArray(v)) {
    return app(v, `${prefix}${k}/`);
  }
  return {topic: `${prefix}${k}`, message: v}
}))

module.exports = app