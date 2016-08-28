module.exports = (
  window.performance.now ||
  window.performance.webkitNow
).bind(window.performance)
