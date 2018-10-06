import curryN from './curryN'
import identity from './identity'

/**
 * @name and
 * @since v0.1.0
 * @category Function
 * @sig Boolean -> Boolean -> Boolean
 * @description
 * Runs an and comparison on the two values passed in
 * @param {...Boolean} args The values to be used to make sure all of them are passing
 * @return {Boolean} The evaluated outcome of the parameters
 *
 * @example
 * and(true, true) // => true
 * and(true, false) // => false
 * and(false, false) // => false
 */
const and = (...args) => args.every(identity)

export default curryN(2, and)
