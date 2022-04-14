import { createRequestAction } from '../createRequestAction'

export const FETCH_SINGLE_MOVIE = 'FETCH_SINGLE_MOVIE'

export const fetchSingleMovie = createRequestAction(FETCH_SINGLE_MOVIE, (id) => {
  return {
    request: {
      method: 'GET',
      url: `movie/${id}`
    }
  }
})