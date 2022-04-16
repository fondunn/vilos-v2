export const minToHour = (num) => {
  const hours = (num / 60)
  const roundedHours = Math.floor(hours)
  const minutes = (hours - roundedHours) * 60
  const roundedMinutes = Math.round(minutes)

  return `${roundedHours} hour(s) and ${roundedMinutes} minute(s)`
}