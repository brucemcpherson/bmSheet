function _filter() {
  // there's no point in most of these are they are much more effectively done in vanilla javascript
  // only implementing Unique

  const { dStringify, numRows, numCols, check2d, forceArray, isEmpty, transpose } = _handy

  /**
   * UNIQUE(arr)
   * arr ? The data to filter by unique entries.
   * If rows are returned that appear to be duplicates, ensure that cells including text do not have differing hidden text, such as trailing spaces.
   * Ensure that numerical values are formatted in the same way ? percentages as percentages, currency values as currency values, etc.
   */
  const unique = (arr) => [...new Map(check2d(arr).map(f => ([dStringify(f), f]))).values()]

  /**
   * FILTER(arr, condition1, [condition2, ...])

    arr - The data to be filtered.
    condition1 - A column or row containing true or false values corresponding to the first column or row
    condition2 ... - [ OPTIONAL ] - Additional rows or columns containing boolean values TRUE or FALSE indicating whether the corresponding row or column in range should pass through FILTER.     
     All conditions must be of the same type (row or column). Mixing row conditions and column conditions is not permitted.
condition arguments must have exactly the same length as range.
   */

  const filter = (...args) => {
    // must be a 2d
    const [arr, ...cargs] = args
    check2d(arr)

    // we'll allow single arrays (so that arrayformula() will work for custom)
    const conds = forceArray(cargs).map(f => check2d(f, true))

    if (!conds.every(c => {
      return numRows(arr) === numRows(c) && numCols(c) === 1
    })) {
      throw new Error('number of rows in condition(s) dont match')
    }
    const fatten = conds.map(i => i.flat())
    return arr.filter((_, i) => fatten.every(c => c[i]))

  }

  /**
   * SORT function
   * Sorts the rows of a given arrayby the values in one or more columns
   * SORT(arr, sort_column, is_ascending, [sort_column2, is_ascending2, ...])
   * arr ? The data to be sorted.
   * sort_column ? The index of the column in range or a range outside range containing the values by which to sort.
   * A range specified as a sort_column must be a single column with the same number of rows as range.
   * is_ascending ? TRUE or FALSE indicating whether to sort sort_column in ascending order. FALSE sorts in descending order.
   * sort_column2, is_ascending2 ...
   * [ OPTIONAL ] ? Additional columns and sort order flags beyond the first, in order of precedence.
   */

  const sort = (arr, ...pairs) => {
    // make sure the arr is correct shape
    check2d(arr)

    // fix up the pairings
    const sortDef = pairs.reduce((p, c, i) => {
      const isOrder = i % 2
      if (!isOrder) p.push({})
      const active = p[p.length - 1]
      if (isOrder) {
        active.isAscending = (i % 2 && (isEmpty(c) || c)) || false
      } else {
        active.sortColumn = typeof c === 'number' ? transpose(check2d(arr))[c - 1] : check2d(c, true).flat()
      }
      return p
    }, [])

    const boo = (b) => b ? 1 : -1
    const extract = (item, sortColumn) => sortColumn[item.index]
    const compare = (a, b, isAscending = true) => a > b ? boo(isAscending) : (a === b ? 0 : -1 * boo(isAscending))

    // we'll attach a row index so we can use the auxiliary columns for sorting
    return arr.map((row, index) => ({
      row,
      index
    })).sort((a, b) => {

      let c = 0;
      for ({ sortColumn, isAscending } of sortDef) {
        c = compare(extract(a, sortColumn), extract(b, sortColumn), isAscending)
        if (c) break
      }
      return c

    }).map(r => r.row)

  }


  /**
   * SORTN
     Returns the first n items in a data set after performing a sort.
     SORTN(range, [n], [display_ties_mode], [sort_column1, is_ascending1], ?)
     range ? The data to be sorted to find the first n items.
     n - [OPTIONAL - 1 by default] The number of items to return. Must be greater than 0.
     display_ties_mode ? [OPTIONAL ? 0 by default] A number representing the way to display ties.  
     0: Show at most the first n rows in the sorted range.
     1: Show at most the first n rows, plus any additional rows that are identical to the nth row.
     2: Show at most the first n rows after removing duplicate rows.
     3: Show at most the first n unique rows, but show every duplicate of these rows.
     sort_column1 ? [OPTIONAL] ? The index of the column in range or a range outside of range containing the values to sort by. A range specified as a sort_column1 must be a single column with the same number of rows as range.
     is_ascending1 ? [OPTIONAL] ? TRUE or FALSE indicates how to sort sort_column1. TRUE sorts in ascending order. FALSE sorts in descending order.
      sort_column2, is_ascending2, ... - [OPTIONAL] - Additional columns and sort order flags used if a tie happens, in order of precedence.
  
   */
  const sortn = (arr,n=1,display_ties_mode = 0, ...pairs) => {
    
    if (n<1) throw new Error('must be at least 1 row in request')

    // start by sorting things
    const sorted = sort(arr,...pairs)
    const sliced = sorted.slice(0,n)

    // now we need to apply the various tweaks
    // thats' the easiest - just return the first n rows
    if (!display_ties_mode) return sliced

    // slice the first n rows, plus any others that match the last row
    if(display_ties_mode ===1) {
      const last = dStringify(sliced.slice(-1)[0])
      const extras = sorted.slice(n).filter(row=>dStringify(row) === last)
      return sliced.concat(extras)
    }

    // dedup
    if (display_ties_mode ===2) {
      // we have to remove the dups from the sorted and return up to n of them
      return unique(sorted).slice(0,n)
    }

    // dedup + duplicate of these rows
    if (display_ties_mode ===3) {
      const u = unique(sorted).slice(0,n)
      // then filter to add any dups
      return sorted.filter(row=> {
        const t = dStringify(row)
        return u.find(f=>dStringify(f) === t)
      })
    }
    throw new Error(`unknown display_ties_mode ${display_ties_mode}`)
  }

  return {
    unique,
    filter,
    sort,
    sortn
  }
}



