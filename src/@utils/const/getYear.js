export const getYear = (date = '2022-02-02') => {
  return new Date(date).getUTCFullYear()
}