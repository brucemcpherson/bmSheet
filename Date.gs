// note this doesnt support locales when createing dates so all that needs to be done still.
// note that dates provided as strings cant be in mm/dd/yy or dd/mm/yy formats - only ISO or abbreviated as in yyyy-mm-dd are supported
function _date() {

  // using the https://github.com/tc39/proposal-temporal for time manipulation
  const { Temporal, helpers } = bmTemporal

  // tz can be set (eg date.setTimeZone (SpreadsheetApp.getActiveSpreadsheet().getSpreadsheetTimeZone())
  let _tz = Temporal.TimeZone.from(helpers.report().libraryTimeZone)
  const settimezone = (tz) => _tz = Temporal.TimeZone.from(tz)
  const gettimezone = () => _tz

  /**
   * convert a date from a date string where the timzezone is implicit
   * for now only valid ISO dates are supported as strings (eg 1/2/1999) wont work
   * @param {string | Date} date the date or datestring
   * @return {Instant} 
   */
  const parseDate = (date) => {
    if (isDate(date)) {
      return Temporal.Instant.fromEpochMilliseconds(date.getTime())
    }
    // TODO here - might do some string clean up/conversion to allow unclean datestrings
    return Temporal.PlainDateTime.from(date).toZonedDateTime({
      timeZone: _tz
    }).toInstant()

  }

  /**
   * convert a date from a temporal to a Date
   * @param {object} temporal one of the temporal date types
   * @return {Date} 
   */
  const todate = (temporal) => new Date(temporal.epochMilliseconds)

  /**
   * convert a date from a date string where the timzezone is implicit
   * for now only valid ISO dates are supported as strings (eg 1/2/1999) wont work
   * @param {string | Date} date the date or datestring
   * @return {Instant} 
   */
  const fromdate = (date) => parseDate(date)

  /**
   * check if its a date object
   * @param {*} date the date or datestring
   * @return {boolean} 
   * .. for some reason (date instanceof Date) doesnt work if date is passed to a library, so using this hack instead
   */
  const isDate = (date) => date && typeof date === 'object' && typeof date.getMonth === 'function'

  /**
   *  DATE
      Converts a year, month, and da into a date.
      Sample Usage
      DATE(1969,7,20)
   * @param {number} year eg 2001
   * @param {number} month (starts at 1)
   * @param {number} day of month
   * @return {Date}
   */
  const date = (year, month, day) => {
    const pd = _tz.getInstantFor({
      year,
      month,
      day,
    })
    return todate(pd)
  }


  const differ = (start_date, end_date) => start_date.until(end_date)
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
   * @param {date | string} start_date 
   * @param {date | string} end_date
   * @param {string} unit - see above
   * @return {number} difference (not inclusive)
  */
  const _units = {
    'y': 'years',
    'm': 'months',
    'd': 'days'
  }
 
  const datedif = (start_date, end_date, unit) => {
    const start = fromdate(start_date)
    const end = fromdate(end_date)
    const d = differ(start, end)
    const u = _units[unit.toLowerCase()]
    return d.round({ relativeTo: start.toString(), smallestUnit: u, roundingMode: "trunc" })[u]
  }

  /**
   * convert a date to a zoneddate
   * for now only valid ISO dates are supported as strings (eg 1/2/1999) wont work
   * @param {string | Date} date the date or datestring
   * @return {ZonedDateTimeISO} 
   */
  const zonedISO = (date) => fromdate(date).toZonedDateTimeISO({
    timeZone: _tz
  })

  /**
   * EDATE(start_date, months)
   * months - The number of months before (negative) or after (positive) start_date to calculate.
   * @param {string | Date} start_date the date or datestring- The date from which to calculate the result.
   * @param {number} months The number of months before (negative) or after (positive) start_date to calculate.
   * @return {Date} 
   */
  const edate = (start_date, months) => todate(zonedISO(start_date).add({ months }))


  /**
   * DAYS function
   * The DAYS function returns the number of days between two dates.
   * days is different from datedif('d') as its absolute and inclusive
   * @param {string | Date} start_date the date or datestring start
   * @param {string | Date} end_date the date or datestring end
   * @return {number} the days between (inclusive)
   */
  const days = (start_date, end_date) => Math.abs(datedif(start_date, end_date, 'd')) + 1

  /**
   * EOMONTH
   * Returns a date representing the last day of a month which falls a specified number of months before or after another date.
   * @param {string | Date} start_date the date or datestring start
   * @param {number} [months=0] how many months between 0 = end of this month
   * @return {Date} the end of month date
   */
  const eomonth = (start_date, months = 0) => {
    const ed = zonedISO(start_date).add({ months })
    return todate(ed.with({ day: ed.daysInMonth }))
  }

  /**
   * DAY
   * @param {string | Date} date the date or datestring
   * @return {number} the day of month
   */
  const day = (date) => zonedISO(date).day

  /**
   * HOUR
   * Returns the hour component of a specific time, in numeric format.
   * @param {string | Date} date the date or datestring
   * @return {number} the hour
   */
  const hour = (date) => zonedISO(date).hour

  /**
    * MINUTE
    * Returns the minute component of a specific time, in numeric format.
    * @param {string | Date} date the date or datestring
    * @return {number} the minute
   */
  const minute = (date) => zonedISO(date).minute

  /**
   * SECOND
   * Returns the  component of a specific time, in numeric format.
   * @param {string | Date} date the date or datestring
   * @return {number} the second
   */
  const second = (date) => zonedISO(date).second


  /**
   * MONTH
   * Returns the  component of a specific time, in numeric format.
   * @param {string | Date} date the date or datestring
   * @return {number} the month
   */
  const month = (date) => zonedISO(date).month

  /**
   * YEAR
   * Returns the  component of a specific time, in numeric format.
   * @param {string | Date} date the date or datestring
   * @return {number} the year
   */
  const year = (date) => zonedISO(date).year

  /**
   * NOW
   * Returns the current date and time as a date value.
   * @return {Date} now
   */
  const now = () => todate(Temporal.now.instant())

  /**
   * TIME
    TIME(hour, minute, second)
   * @param {number} hour - The hour component of the time.
   * @param {number} minute - The minute component of the time.
   * @param {number} second - The second component of the time.
   * @return {Date}the current date and time as a date value.
  */
  const time = (hour, minute, second) => {
    const pd = _tz.getInstantFor({
      day: 1,
      month: 1,
      year: 1970,
      hour,
      minute,
      second,
    })
    return todate(pd)
  }

  /**
   * 
    WEEKDAY(date, [type])
    date - The date for which to determine the day of the week. Must be a reference to a cell containing a date, a function returning a date type, or a number.
    type - [ OPTIONAL - 1 by default ] - A number indicating which numbering system to use to represent weekdays. By default counts starting with Sunday = 1.
    If type is 1, days are counted from Sunday and the value of Sunday is 1, therefore the value of Saturday is 7.
    If type is 2, days are counted from Monday and the value of Monday is 1, therefore the value of Sunday is 7.
    If type is 3, days are counted from Monday and the value of Monday is 0, therefore the value of Sunday is 6
  * @param {date | dateString } date The date for which to determine the day of the week
  * @param {number} [type=1] the type - see above
  * @return {number} day of week
*/
  const weekday = (date, type = 1) => {
    // this is where monday is 1 - so make it 0 -6
    const w = zonedISO(date).dayOfWeek - 1
    switch (type) {
      // if sunday is 1
      case 1:
        return ((w + 1) % 7) + 1
      // if monday is 1
      case 2:
        return w + 1
      // if monday is 0
      case 3:
        return w
      default:
        throw new Error('weekday type should be 1-3')
    }

  }

  /** 
   * 
    ISOWEEKNUM
    Returns the number of the ISO (International Organization for Standardization) week of the year where the provided date falls.
    * @param {date | dateString } date The date for which to determine the iso week num
    * @return {number} isoweek number
  */
  const isoweeknum = (date) => zonedISO(date).weekOfYear

  /** TODAY
   * Returns the current date as a date value.
   */
  const today = () => todate(Temporal.now.instant().toZonedDateTimeISO({ timeZone: _tz }).with({ hour: 0, minute: 0, second: 0 }))


  /**
   * 
   * DATEVALUE
   * Converts a provided date string in a known format to an (excel) date value.
   */
  const datevalue = (dateString) => dateToValue(dateString)

  // makes an excel type datevalue from a date

  const dateToValue = (date) => {
    // this is 1/1/1970in excel time
    const zeroHour = 25569
    // ms in a day
    const msd = 1000 * 60 * 60 * 24
    const d = fromdate(date)
    const ms = d.epochMilliseconds
    return ms / msd + zeroHour
  }


  return {
    date,
    datedif,
    datevalue,
    day,
    days,
    hour,
    time,
    today,
    now,
    minute,
    second,
    time,
    edate,
    eomonth,
    month,
    year,
    weekday,
    isoweeknum,
    settimezone,
    gettimezone,
    todate,
    fromdate
  }
}



