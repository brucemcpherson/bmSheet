  // some utilities
  var _handy = (()=>{
    const isUndefined = (a) => typeof a === typeof undefined

    return {
      forceArray: (a) => Array.isArray(a) ? a : [a],
      asNumber: (a) => Number(a),
      isUndefined,
      fixOptional: (arg, defaultValue) => isUndefined(arg) ? defaultValue : arg
    }
    

  })()
 
