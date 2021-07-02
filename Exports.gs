// expose everything under a common namespace
// the tz arg is needed if the sheet is in a different timezone than the script
// if missing it'll use the script timezone
var functions = {
  ..._date(),
  ..._array()
}

// expose stuff from temporal in case its needed
var { Temporal, helpers } = bmTemporal

// the wrapper so these can be declared as custom functions
var customFunctions = (name,  ...args) => functions[name](...args)

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