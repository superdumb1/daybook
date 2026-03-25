export const getDateRange = (type: string) => {
  const now = new Date()

  const start = new Date()
  const end = new Date()

  switch (type) {
    case "today":
      start.setHours(0, 0, 0, 0)
      end.setHours(23, 59, 59, 999)
      break

    case "yesterday":
      start.setDate(now.getDate() - 1)
      start.setHours(0, 0, 0, 0)

      end.setDate(now.getDate() - 1)
      end.setHours(23, 59, 59, 999)
      break

    case "last7days":
      start.setDate(now.getDate() - 7)
      start.setHours(0, 0, 0, 0)
      end.setHours(23, 59, 59, 999)
      break

    case "last30days":
      start.setDate(now.getDate() - 30)
      start.setHours(0, 0, 0, 0)
      end.setHours(23, 59, 59, 999)
      break

    case "thismonth":
      start.setDate(1)
      start.setHours(0, 0, 0, 0)
      end.setHours(23, 59, 59, 999)
      break

    case "all":
      return null

    default:
      return null
  }

  return {
    start: start.toISOString(),
    end: end.toISOString(),
  }
}