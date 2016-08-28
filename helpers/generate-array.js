module.exports = function (length, transform) {
  var nullArray = Array.apply(null, { length: length })
  return transform
    ? nullArray.map(transform)
    : nullArray
}
