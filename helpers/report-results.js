module.exports = function (times) {
  times = [].concat(times)
  times.sort(function (a, b) { return a - b })

  var report = [
    'Fastest: ' + times[0] + 'ms',
    'Median: ' + times[times.length / 2] + 'ms',
    'Average: ' + times.reduce(function (a, b) { return a + b }, 0) / times.length + 'ms',
    '95th Perc.: ' + times[Math.ceil(times.length * 0.95)] + 'ms',
    'Slowest: ' + times[times.length - 1] + 'ms'
  ].join('\n')

  console.log(report)
  document.getElementById('results').innerHTML = report.replace(/\n/g, '<br>')
  document.getElementById('root').innerHTML = ''
}
