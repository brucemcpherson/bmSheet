/**
 * some of these are only partially implemented with some more esoteric args ignored
 * also arrays are generally flattened before use
 * range inputs should actually be getValues()
 */
function _array() {


  /**
   * =FLATTEN(range1, [range2, ?])
   */
  const flatten = (...args) => _handy.flatten(args)

  /**
    * ARRAY_CONSTRAIN(input_range, num_rows, num_cols)
      input_range - The range to constrain.
      num_rows - The number of rows the result should contain.
      num_cols - The number of columns the result should contain
    */
  const array_constrain = (input_range, num_rows, num_cols) => _handy.forceArray(input_range).slice(0, num_rows).map(r => r.slice(0, num_cols))

  /**
   * FREQUENCY
    Calculates the frequency distribution of a one-column array into specified classes.

    Sample Usage
    FREQUENCY(A2:A40,B2:B5)
    Syntax
    FREQUENCY(data, classes)
    data - The array or range containing the values to be counted.
    classes - The array or range containing the set of classes.
    classes should be sorted for clarity, but FREQUENCY will sort the values specified internally if they are not and return correct results.
   */

  const frequency = (data, classes) => {

    // the extra one at the end for those that are too big
    const keys = flatten(classes).sort().concat([null])
    const freqs = [...keys].fill(0)
    flatten(data).forEach(d => {
      let i = 0;
      while (i < keys.length - 1 && d > keys[i]) i++;
      freqs[i]++
    })
    return freqs.map(k => [k])
  }

  /**
   * note this flattens all arrays, so can only deal with 1 dependent variable at once
   * GROWTH(known_data_y, [known_data_x], [new_data_x], [b])
   */
  const growth = (known_y, known_x, new_x, use_const) => _soGrowth(flatten(known_y), flatten(known_x), flatten(new_x), use_const)

  /**
   * note this flattens all arrays, so can only deal with 1 dependent variable at once, and b argument is not implemented
   * TREND(known_data_y, [known_data_x], [new_data_x], [b])
   */
  const trend = (known_y, known_x, new_x) => {

    // get the slope
    const ls = linest(known_y, known_x)

    // apply it
    return (flatten(new_x || known_x)).map((d, _, a) => ls[0] * d + ls[1])

  }


  /**
   * note this flattens all arrays, so can only deal with 1 dependent variable at once, and b and verbose argument is not implemented
   * LOGEST(known_data_y, [known_data_x], [b], [verbose])
   */
  const logest = (known_y, known_x) => {

    // get the slope
    const ls = linest(flatten(known_y).map(d => Math.log(d)), known_x)

    return [[
      Math.exp(ls[0]),
      Math.exp(ls[1])
    ]]

  }


  /**
   * TRANSPOSE(array_or_range)
   */
  const transpose = (arr2d) => arr2d[0].map((_, col) => arr2d.map(row => row[col]));

  /**
   * SUMPRODUCT(array1, [array2, ...])
    array1 - The first array or range whose entries will be multiplied with corresponding entries in the second such array or range.
    array2, ... - [ OPTIONAL - {1,1,1,...} with same length as array1 by default ] - The second array or range whose entries will be multiplied with corresponding entries in the first such array or range.
    note - unlike the function, this sumproduct is more lenient about the shape of the arrays - they just need to have the same number of arguments
   */
  const sumproduct = (...args) => {
    const items = _handy.normalizeLengths(args)
    return Array.from({ length: items[0].length }).map((d, i) => items.reduce((p, c) => p * Number(c[i]), 1)).reduce((p, c) => p + c, 0)
  }

  /**
   * note this flattens all arrays, so can only deal with 1 dependent variable at once
   * also calculate b and verbose are not implemented
   * LINEST(known_data_y, [known_data_x], [calculate_b], [verbose])
   */
  const linest = (known_data_y, known_data_x) => _soLeastSquaresFitLinear(flatten(known_data_y), flatten(known_data_x))

  /**
   * MDETERM
   * Returns the matrix determinant of a square matrix specified as an array
   * Syntax
   * MDETERM(square_matrix)
   * square_matrix - An array or range with an equal number of rows and columns representing a matrix whose determinant will be calculated.
   */
  const mdeterm = (arr) => {
    if (!arr || !arr[0] || arr.length !== arr[0].length) throw new Error('matrix should be square')
    return Mathjs.det(arr)
  }

  /**
   * MINVERSE
   * Returns the inverse  of a square matrix specified as an array
   * Syntax
   * MINVERSE (square_matrix)
   * square_matrix - An array or range with an equal number of rows and columns
   */
  const minverse = (arr) => {
    if (!arr || !arr[0] || arr.length !== arr[0].length) throw new Error('matrix should be square')
    return Mathjs.inv(arr)
  }

  /**
   * MMULT
   * Calculates the matrix product of two matrices specified as arrays or ranges.
   * Syntax
   * MMULT(matrix1, matrix2)
   * As standard in matrix multiplication, the number of columns for matrix1 must equal the number of rows for matrix2
   */
  const mmult = (a, b) => {
    const ca = a && a[0] && a[0].length
    const rb = b && b.length
    if (ca !== rb) throw new Error('the number of columns for matrix1 must equal the number of rows for matrix2')
    return Mathjs.multiply (a, b)
  }


  // https://stackoverflow.com/questions/7437660/how-do-i-recreate-an-excel-formula-which-calls-trend-in-c
  function _soLeastSquaresFitLinear(known_y, known_x, offset_x = 0) {
    if (known_y.length != known_x.length) {
      throw new Error('known y and known x arrays are unequal lengths')
    }
    var numPoints = known_y.length;

    var x1 = 0, y1 = 0, xy = 0, x2 = 0, J, M, B;
    for (var i = 0; i < numPoints; i++) {
      known_x[i] -= offset_x;
      x1 = x1 + known_x[i];
      y1 = y1 + known_y[i];
      xy = xy + known_x[i] * known_y[i];
      x2 = x2 + known_x[i] * known_x[i];
    }

    J = (numPoints * x2) - (x1 * x1);
    if (J != 0.0) {
      M = ((numPoints * xy) - (x1 * y1)) / J;
      B = ((y1 * x2) - (x1 * xy)) / J;
    }
    return [M, B];
  }

  //https://stackoverflow.com/questions/14161990/how-to-implement-growth-function-in-javascript
  function _soGrowth(known_y, known_x, new_x, use_const) {
    // default values for optional parameters:
    if (typeof (known_x) == 'undefined') {
      known_x = [];
      for (var i = 1; i <= known_y.length; i++) known_x.push(i);
    }
    if (typeof (new_x) == 'undefined') {
      new_x = [];
      for (var i = 1; i <= known_y.length; i++) new_x.push(i);
    }
    if (typeof (use_const) == 'undefined') use_const = true;

    // calculate sums over the data:
    var n = known_y.length;
    var avg_x = 0; var avg_y = 0; var avg_xy = 0; var avg_xx = 0;
    for (var i = 0; i < n; i++) {
      var x = known_x[i]; var y = Math.log(known_y[i]);
      avg_x += x; avg_y += y; avg_xy += x * y; avg_xx += x * x;
    }
    avg_x /= n; avg_y /= n; avg_xy /= n; avg_xx /= n;

    // compute linear regression coefficients:
    if (use_const) {
      var beta = (avg_xy - avg_x * avg_y) / (avg_xx - avg_x * avg_x);
      var alpha = avg_y - beta * avg_x;
    } else {
      var beta = avg_xy / avg_xx;
      var alpha = 0;
    }
    // console.log("alpha = " + alpha + ", beta = " +  beta);

    // compute and return result array:
    var new_y = [];
    for (var i = 0; i < new_x.length; i++) {
      new_y.push(Math.exp(alpha + beta * new_x[i]));
    }
    return new_y;
  }

  return {
    array_constrain,
    flatten,
    frequency,
    growth,
    linest,
    trend,
    logest,
    transpose,
    sumproduct,
    mdeterm,
    mmult,
    minverse
  }
}



