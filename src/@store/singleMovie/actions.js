import { createRequestAction } from '../createRequestAction'
import { createAction } from 'redux-actions'

export const FETCH_SINGLE_MOVIE = 'FETCH_SINGLE_MOVIE'
export const FETCH_SIMILAR_MOVIES = 'FETCH_SIMILAR_MOVIES'
export const FETCH_SINGLE_MOVIE_CAST = 'FETCH_SINGLE_MOVIE_CAST'
export const RESET_SINGLE_MOVIE = 'RESET_SINGLE_MOVIE'

export const fetchSingleMovie = createRequestAction(FETCH_SINGLE_MOVIE, (id) => {
  return {
    request: {
      method: 'GET',
      url: `movie/${id}`,
      videos: true
    }
  }
})
export const fetchSimilarMovies = createRequestAction(FETCH_SIMILAR_MOVIES, (id) => {
  return {
    request: {
      method: 'GET',
      url: `movie/${id}/similar`
    }
  }
})

export const fetchSingleMovieCast = createRequestAction(FETCH_SINGLE_MOVIE_CAST, (id) => {
  return {
    request: {
      method: 'GET',
      url: `movie/${id}/credits`
    }
  }
})

export const resetSingleMovie = createAction(RESET_SINGLE_MOVIE)