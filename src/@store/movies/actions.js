import { createRequestAction } from '../createRequestAction'

export const FETCH_MOVIES = 'FETCH_MOVIES'

export const fetchMovies = createRequestAction(FETCH_MOVIES, (page = 1) => {
  return {
    request: {
      method: 'GET',
      url: `movie/popular?&language=en-US&page=${page}`
    }
  }
})