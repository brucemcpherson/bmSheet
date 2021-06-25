// expose everything under a common namespace
var functions = ((exports) => exports.reduce((p, c) => ({ ...p, ...c() }), {}))([_array, _date])
var customFunctions = (name, ...args) => functions[name](...args)

/**
 * to use these in custom functions eg..
 * customFunctions('days',"2/28/2016", "2/28/2017" )
 */
