/**
 * TableDefinition type
 * @typedef {Object} TableDefinition
 * @property {string} name - column name 
 * @property {number} [index] - the position in which it first appears (according to Object.keys)
 * @property {string} type - the most likely type (if multiple types detected will default to string) null and undefined are overridden with any proper type
 */

var GasSql = (() => {
  
  const fixName = (name) => name.toLowerCase().replace(/\s/g,'_')

  /**
   * organizes an array of data objects into something we can use to populate an sql table
   * @param {object[]} data an array of objects
   * @return {Map<tableDefintion>} a map containing tableDefintions
   */
  const makeTableDefinition = (data) => {
    // creates an sql
    // first need to find the columns in the data
    const columns = new Map()
    data.forEach(row => {
      Object.keys(row).forEach((name, index) => {
        // names are always lower cased as this sql is case insensitive
        colName = fixName(name)
        const type = typeof row[name]
       
        if (!columns.has(colName)) {
          columns.set(colName, {
            name,
            index,
            type: type === 'string' && type === '' ? undefined : type,
            colName
          })
        } else {
          // may need to tweak the type
          const m = columns.get(colName)
          if(name !== m.name) {
            throw new Error (`sql duplicate name ${name}/${m.name} - maybe because of case sensitivity or spaces`)
          }
          // TODO deal with Date && null
          if (!m.type !== type) {
            if (m.type === typeof undefined || (type === 'string' && row[name] !== '')) {
              m.type = type
            } else {
              // TODO deal with other exceptions
            }
          }
        }
      })
    })
    // set default tyoe to string
    for (let [k,c] of columns) {
      if(!c.type) c.type ='string'
    }
    return columns
  }

  /**
   * make sql statement to create a table from tableDefintions
   * @param {string} name the table name
   * @param {{Map<tableDefintion>} tableDefintions  a map containing tableDefintions
   * @returns {string} the sqlString
   */
  const makeSqlCreateTable = ({ name, tableDefinitions }) => {
    return {
      sql: `CREATE TABLE ${fixName(name)} (${Array.from(tableDefinitions).map(([key, value]) => {
        return key + ' ' + value.type
      }).join(',')})`
    }
  }

  /**
   * execute an sql statement
   */
  const exec = ({ sql }) => {
    return alasql(sql)
  }

  /**
   * make sql statement to create a table fromdata
   * @param {string} name the table name
   * @param {Array<Object>} an array of objects
   * @returns {object} the result
   */
  const createTableFromData = ({ name, data }) => {
    const tableDefinitions = makeTableDefinition(data)
    return createTable({ name, tableDefinitions })
  }

  const typify = (value, force) => {
    let type = force ? force : typeof value
    // todo deal with dates/undef etc
    switch (type) {
      case 'string':
        if (typeof value === typeof undefined) return "''''"
        return `'${value.toString().replace(/\'/,"''")}'`
      case 'number':
        return parseFloat(value || '0')
      default:
        throw new Error(`type ${type} not yet supported`)
    }
  }

  /**
   * make sql statement to create a table from tableDefintions
   * @param {string} name the table name
   * @param {{Map<tableDefintion>} tableDefintions  a map containing tableDefintions
   * @returns {Object} the sqlString
   */
  const createTable = ({ name, tableDefinitions }) => {
    const sql = makeSqlCreateTable({ name, tableDefinitions })
    return {
      ...sql,
      tableDefinitions,
      exec: exec(sql),
      name: fixName(name),
    }
  }

  const insert = ({ name, values }) => {
    const sql = `INSERT INTO ${fixName(name)} VALUES ${values.map(v => ('(' + (v.map(f => typify(f)).join(',')) + ')')).join(',')}`
    return {
      exec: exec({ sql }),
      sql
    }
  }

  const createAndInsertFromData = ({name, data}) => {
    const {tableDefinitions} = createTableFromData({name, data})
    return insertFromData ({name, data, tableDefinitions})
  }


  const insertFromData = ({ name, data, tableDefinitions }) => {
    tableDefinitions =  Array.from((tableDefinitions && tableDefinitions.values()) || makeTableDefinition(data).values())

    // now force any types
    const rows = data.map(row => {
      return tableDefinitions.map(td => {
        return {
          type: td.type,
          value: row[td.name]
        }
      })
    })

    const sql = `INSERT INTO ${name.toLowerCase()} VALUES ${rows.map(v => ('(' + (v.map(f => typify(f.value, f.type)).join(',')) + ')')).join(',')}`
    return {
      exec: exec({ sql }),
      name,
      tableDefinitions
    } 
  }
  return {
    exec,
    createTable,
    createTableFromData,
    insert,
    insertFromData,
    createAndInsertFromData,
    typify,
    fixName
  }
})()