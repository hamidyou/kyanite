
const _curry2 = function _curry2 (fn) {
  return function f2 (a, b) {
    if (!arguments.length) {
      return f2
    }

    if (arguments.length === 1) {
      return function (_b) {
        return fn(a, _b)
      }
    }

    if (arguments.length === 2) {
      return fn(a, b)
    }

    return fn(a, b)
  }
}

export default _curry2
