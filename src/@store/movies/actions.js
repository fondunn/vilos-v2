import { createRequestAction } from '../createRequestAction'
import { createAction } from 'redux-actions'
export const FETCH_MOVIES = 'FETCH_MOVIES'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export const fetchMovies = createRequestAction(FETCH_MOVIES, (page = 1) => {
  return {
    request: {
      method: 'GET',
      url: `movie/popular?&language=en-US&page=${page}`
    }
  }
})

export const setCurrentPage = createAction(SET_CURRENT_PAGE)