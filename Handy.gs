// some utilities
var _handy = (() => {

  const {
    exec,
    createAndInsertFromData,
    typify,
    fixName
  } = bmAlasql.GasSql

  const randomName = () => 't' + generateUniqueString()
  const isUndefined = (a) => typeof a === typeof undefined

  const forceArray = (a) => Array.isArray(a) ? a : [a]

  const flatten = (...args) => forceArray(args).map(f => forceArray(f).flat()).flat()

  const check2d = (a) => {
    if (!Array.isArray(a) || !Array.isArray(a[0])) throw new Error('must be 2d array like [[x,x...],[y,y...],...]')
    return a
  }
  const isEmpty = (a) => isUndefined(a) || a === ''

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

  const makeFiddler = (arr) => new bmFiddler.Fiddler().setValues(check2d(arr))

  const makeDatabase = ({ arr, name }) => {
    const fiddler = makeFiddler(arr)
    return {
      db: createAndInsertFromData({ name, data: fiddler.getData() }),
      fiddler
    }
  }

  /**
 * generate a unique id
 * @param {number} [length=4] size of random piece
 * @return {string} a unique string
 */
  const generateUniqueString = (length = 4) => {
    const randBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const arbitraryString = ([...Array(length)].map(() => String.fromCharCode(randBetween(97, 122)))).join('')
    return arbitraryString + new Date().getTime().toString(32);
  };

  const hasOperator = (v) => !isEmpty(v) && v.toString().match(/^\s*[=\<\>]/)
  const dropOperator = (v) => hasOperator(v) ? v.replace(/[^\w-\.]*(.*)/, '$1') : v
  const getOperator = (v) => hasOperator(v) ? v.replace(/([^\w-\.]*).*/, '$1') : '='

  const getFieldName = ({ field, tableDefinitions }) => {
    const fix = fixName(field)
    const o = tableDefinitions.find(f => typeof field === 'number' ? field === f.index + 1 : fix === f.colName)
    if (!o) throw new Error(`field ${field}(${fix}) not found`)
    return o.colName
  }
  const getCriteriaFilters = ({ criteria, tableDefinitions }) => {
    // get the headers
    const f = criteria.slice(0, 1)
    if (!Array.isArray(f)) throw new Error('first row of criteria should be an array of field names in the database')
    const fieldNames = f[0]
    const values = criteria.slice(1)
    return values.map(row => row.map((v, i) => {
      const fieldName = fixName(fieldNames[i])
      const ob = tableDefinitions.find(k => k.colName === fieldName)
      if (!ob) throw new Error(`Cant find criteria fieldName ${fieldName} in database`)
      return isEmpty(v) ? null : `${fieldName} ${getOperator(v)} ${typify(dropOperator(v), ob.type)}`
    }).filter(t => t)).filter(t => t.length)
  }
  const dropTable = ({name}) => exec({sql: `drop table ${name}`}) 

  const fCountA = (oVals) => oVals.filter(f => !isEmpty(f)).length
  const fCount = (oVals) => oVals.filter(f =>  typeof f === 'number').length
  const fAverage = (oVals) => Mathjs.mean(oVals)
  const fMax = (oVals) => Mathjs.max(oVals)
  const fMin = (oVals) => Mathjs.min(oVals)
  const fProduct = (oVals) => Mathjs.prod(oVals)
  const fStdev = (oVals) => Mathjs.std(oVals)
  const fStdevp = (oVals) => Mathjs.std(oVals, 'uncorrected')
  const fSum = (oVals) => Mathjs.sum(oVals)
  const fVar = (oVals) => Mathjs.variance(oVals)
  const fVarp = (oVals) => Mathjs.variance(oVals, 'uncorrected')

  return {
    getFieldName,
    check2d,
    forceArray,
    asNumber: (a) => Number(a),
    isUndefined,
    fixOptional: (arg, defaultValue) => isUndefined(arg) ? defaultValue : arg,
    normalizeLengths,
    flatten,
    makeFiddler,
    makeDatabase,
    generateUniqueString,
    isEmpty,
    hasOperator,
    exec,
    typify,
    dropOperator,
    getOperator,
    fixName,
    randomName,
    getCriteriaFilters,
    dropTable,
    fCount,
    fCountA,
    fAverage,
    fMax,
    fMin,
    fProduct,
    fStdev,
    fStdevp,
    fSum,
    fVar,
    fVarp
  }


})()

