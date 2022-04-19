export const getPoster = (size, url) => {
  if (!size || !url) return `Check 'size' or 'url'`
  if (size === 'small') return `http://image.tmdb.org/t/p/w185${url}`
  if (size === 'medium') return `http://image.tmdb.org/t/p/w500${url}`
  if (size === 'big') return `http://image.tmdb.org/t/p/w1280${url}`
}