export const getTimeFromMinutes = (mins: number) => {
  const hours = Math.trunc(mins / 60)
  const minutes = mins % 60

  const hoursConcat = hours ? `${hours}ч ` : ''
  const minutesConcat = minutes ? `${minutes}м` : ''
  return hoursConcat + minutesConcat
}
