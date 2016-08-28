var generateArray = require('./generate-array')
var reportResults = require('./report-results')
var now = require('./now')

var items = generateArray(10000)
var maxCount = 100

module.exports = function (example) {
  var count = 0
  var times = []

  document.getElementById('results').textContent = 'Running benchmark. This may take a minute...'

  function runExample () {
    var startTime = now()
    example(items, function () {
      var totalTime = Math.ceil(now() - startTime)
      console.log(totalTime + 'ms')
      times.push(totalTime)
      count += 1
      if (count < maxCount) {
        document.getElementById('root').innerHTML = ''
        runExample()
      } else {
        reportResults(times)
      }
    })
  }
  setTimeout(runExample, 1)
}
