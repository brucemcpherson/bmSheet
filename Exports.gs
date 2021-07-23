

// expose stuff from temporal in case its needed
var { Temporal, helpers } = bmTemporal
var { GasSql } = bmAlasql
var { Fiddler} = bmFiddler

// expose stuff from math js that might be useful
var { math: Mathjs } = bmMathjs

var functions = {
  ..._database(),
  ..._date(),
  ..._array()
}

// the wrapper so these can be declared as custom functions
var customFunctions = (name, ...args) => functions[name](...args)

/**
 * to use these in custom functions eg..
 * customFunctions("days","2/28/2016", "2/28/2017" )

 * all the functions in the library can be accessed as custom functions
 * add this code to your container bound script
 * @customfunction
 * @param {string} name of the function
 * @param {...*} var_args
 * @return {*}
 *
const custom  = (name, ...args) =>  {
  // this is essential if the script is running in a different timezone to the sheets timezone for custom functions to work in the calling sheet
  bmSheet.customFunctions('settimezone', S preadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone())
  return bmSheet.customFunctions(name.toLowerCase(), ...args)
}

*/
