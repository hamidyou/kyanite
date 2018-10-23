import _curry2 from '../_internals/_curry2'

/**
 * @name find
 * @since v0.1.0
 * @category Array
 * @sig (a -> Boolean) -> [a] -> a | Boolean
 * @description Find an item based on the function sent in and its list
 * @param  {Function} fn The function used/called during the find
 * @param  {Array} list The list we want to search through
 * @return {Any} Returns either the found item, or false if nothing is found
 *
 * @example
 * find(v => v.val === 'test', [{val: 'test'}]) // => 'test'
 * find(v => v.val === 'none', [{val: 'test'}, {val: 'none'}]) // => { val: 'none' }
 * find(v => v > 2, [1, 2, 3, 4, 5]) // => 3
 *
 * // find is also curried
 *
 * const finder = find(v => v.val === 'test')
 *
 * finder([{val: 'test'}]) // => 'test'
 * finder([{val: 'test'}, {val: 'none'}]) // => { val: 'test' }
 */
const find = (fn, list) => {
  for (let i = 0, len = list.length; i < len; i++) {
    const val = list[i]

    if (fn(val)) {
      return val
    }
  }

  return undefined
}

export default _curry2(find)
