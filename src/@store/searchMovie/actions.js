import { createRequestAction } from '../createRequestAction'
import { createAction } from 'redux-actions'

export const FETCH_SEARCH_MOVIES = 'FETCH_SEARCH_MOVIES'
export const RESET_SEARCH_MOVIE = 'RESET_SEARCH_MOVIE'

export const fetchSearchMovies = createRequestAction(FETCH_SEARCH_MOVIES, (title) => {
  return {
    request: {
      method: 'GET',
      url: `search/multi?query=${title}&language=en-Us`
    }
  }
})
export const resetSearch = createAction(RESET_SEARCH_MOVIE)