import cover from '@assets/cover.jpg'
export const isEmptyImg = (path) => {
  if (!path) return cover
  else return path
}