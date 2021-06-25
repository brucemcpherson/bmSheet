function _date() {

  /**
   *  DATE
      Converts a year, month, and da into a date.
      Sample Usage
      DATE(1969,7,20)
   */
  const date  = (y, m, d) => new Date(y, m - 1, d)
  
  /**
   * DATEDIF(start_date, end_date, unit)
    start_date - The start date to consider in the calculation. Must be a reference to a cell containing a DATE, a function returning a DATE type, or a number.
    end_date - The end date to consider in the calculation. Must be a reference to a cell containing a DATE, a function returning a DATE type, or a number.
    unit - A text abbreviation for unit of time. For example,"M" for month. Accepted values are "Y","M","D" ,"MD","YM","YD".
    "Y": the number of whole years between start_date and end_date.
    "M": the number of whole months between start_date and end_date.
    "D": the number of days between start_date and end_date.
    --- these below are not implemented yet
    "MD": the number of days between start_date and end_date after subtracting whole months.
    "YM": the number of whole months between start_date and end_date after subtracting whole years.
    "YD": the number of days between start_date and end_date, assuming start_date and end_date were no more than one year apart.
  */
  const datedif = (start_date, end_date, unit) => _ggDates.DateDiff(unit,  new Date(start_date), new Date(end_date))
  
  /**
   * 
   * DATEVALUE
   * Converts a provided date string in a known format to a date value.
   */
  const datevalue = (dateString) => _ggDates.DateValue(dateString)

  /**
   * DAY
   * Returns the day of the month that a specific date falls on, in numeric format.
   */
  const day = (dateString) => new Date(dateString).getDate()

  /**
   * HOUR
   * Returns the hour component of a specific time, in numeric format.
   */
  const hour = (dateString) => new Date(dateString).getHours()

  /**
   * DAYS function
   * The DAYS function returns the number of days between two dates.
   */
  const days = (end_date, start_date) => _ggDates.DateDiff("d", new Date(start_date), new Date(end_date))

  return {
    date,
    datedif,
    datevalue,
    day,
    days,
    hour
  }
}


