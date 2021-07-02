
var helpers = ({

  report: () => {
    const libraryTimeZone = Session.getScriptTimeZone()
    const instant = Temporal.now.instant()
    const zonedDate = instant.toZonedDateTimeISO(libraryTimeZone).toString()
    const plain = Temporal.now.plainDateTimeISO().toString()

    return {
      libraryTimeZone,
      zonedDate,
      plain,
      instant,
      ms: instant.epochMilliseconds,
      local: instant.toString(),
      legacyDate: new Date(instant.epochMilliseconds),
      equal: instant.equals(Temporal.Instant.from(zonedDate))
    }
  }
})


