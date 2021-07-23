function _database() {

  const {
    makeDatabase,
    exec,
    getFieldName,
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
  } = _handy



  const prep = ({ arr, criteria }) => {
    // first of all make an sql table and fiddler
    // it's a random name
    const name = randomName()
    const { fiddler, db } = makeDatabase({ name, arr })
    const criteriaFilters = getCriteriaFilters({ criteria, tableDefinitions: db.tableDefinitions })

    // now need 
    return {
      fiddler,
      db,
      name,
      criteriaFilters,
      criteriaWhere: ` where (${criteriaFilters.map(c => '(' + c.join(" and ") + ')').join(" or ")})`
    }
  }

  const _dget = ({ arr, field, criteria }) => {
    const {
      name,
      criteriaWhere,
      db
    } = prep({ arr, criteria })

    const fieldName = getFieldName({ field, tableDefinitions: db.tableDefinitions })
    const sql = `select ${fieldName} from ${name}${criteriaWhere}`

    const result = exec({ sql })
    return {
      name,
      result,
      fieldName
    }
  }

  // just pluck out the result from the _dget response
  const oVals = ({ result, fieldName }) => result.map(f => f[fieldName])

  /**
   * these comments apply to all the database functions
      database ? The array containing the data to be considered, structured in such a way that the first row contains the labels for each column's values.
      field - Indicates which column in database contains the values to be extracted and operated on.
      field may either be a text label corresponding to a column header in the first row of database or a numeric index indicating which column to consider, where the first column has the value 1.
      criteria - An array containing zero or more criteria to filter the database values by before operating.
   */


  const _dall = (database, field, criteria, treatment) => {
    const response = _dget({ arr: database, field, criteria })
    // don't need the table any more
    dropTable(response)
    // the treatment differs
    return treatment(oVals(response))
  }
  /**
   * DAVERAGE(database, field, criteria)
   */
  const daverage = (database, field, criteria) => _dall(database, field, criteria, fAverage)


  /**
   * DCOUNT (database, field, criteria)
   * TODO - we're treating empty numeric values as zero so nulls will be counted at the moment
   */
  const dcount = (database, field, criteria) => _dall(database, field, criteria, fCount)


  /**
   * DCOUNTA (database, field, criteria)
   */
  const dcounta = (database, field, criteria) => _dall(database, field, criteria, fCountA)

  /**
   * DMAX (database, field, criteria)
   */
  const dmax = (database, field, criteria) => _dall(database, field, criteria, fMax)

  /**
   * DMIN (database, field, criteria)
   */
  const dmin = (database, field, criteria) => _dall(database, field, criteria, fMin)

  /**
   * DProduct (database, field, criteria)
   */
  const dproduct = (database, field, criteria) => _dall(database, field, criteria, fProduct)

  /**
   * DSTDEV (database, field, criteria)
   */
  const dstdev = (database, field, criteria) => _dall(database, field, criteria, fStdev)

  /**
   * DSTDEVP (database, field, criteria)
   */
  const dstdevp = (database, field, criteria) => _dall(database, field, criteria, fStdevp)

  /**
   * DSUM (database, field, criteria)
   */
  const dsum = (database, field, criteria) => _dall(database, field, criteria, fSum)

  /**
   * dvar (database, field, criteria)
   */
  const dvar = (database, field, criteria) => _dall(database, field, criteria, fVar)

  /**
   * dvarp (database, field, criteria)
   */
  const dvarp = (database, field, criteria) => _dall(database, field, criteria, fVarp)

  /**
   * DGET(database, field, criteria) 
   * returns a single value and will error if there's none or more than 1
  */
  const dget = (database, field, criteria) => _dall(database, field, criteria, (ov) => {
    if (!ov.length) throw new Error('no matches found')
    if (ov.length > 1) throw new Error('more than 1 match found')
    return ov[0]
  })



  return {
    dget,
    daverage,
    dcount,
    dcounta,
    dmax,
    dmin,
    dproduct,
    dstdev,
    dstdevp,
    dsum,
    dvar,
    dvarp
  }
}
