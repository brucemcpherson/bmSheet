// some utilities
var _handy = (() => {

  const isUndefined = (a) => typeof a === typeof undefined

  const forceArray =  (a) => Array.isArray(a) ? a : [a]

  const flatten = (...args) => forceArray(args).map(f => forceArray(f).flat()).flat()

  const normalizeLengths = (arr) => {
    // normalize the argument array dimensions
    let items = arr.map(f => flatten(f))
    const maxLength = Math.max(...items.map(d => d.length))
    // blow out those of length 1
    items = items.map(f => f.length === 1 ? Array.from({ length: maxLength }).fill(f[0]) : f)
    // check they are all the same length
    if (!items.every(d => d.length === maxLength)) throw new Error("all arrays should be the same length or 1")
    return items
  }

  return {
    forceArray,
    asNumber: (a) => Number(a),
    isUndefined,
    fixOptional: (arg, defaultValue) => isUndefined(arg) ? defaultValue : arg,
    normalizeLengths,
    flatten
  }


})()

