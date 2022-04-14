import { createRequestAction } from '../createRequestAction'

export const FETCH_SEARCH_MOVIES = 'FETCH_SEARCH_MOVIES'

export const fetchSearchMovies = createRequestAction(FETCH_SEARCH_MOVIES, (title) => {
  return {
    request: {
      method: 'GET',
      url: `search/multi?query=${title}&language=en-Us`
    }
  }
})