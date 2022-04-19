import { fetchSearchMovies, resetSearch } from './actions'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  fetchedSearchedMovies: [],
  isLoading: false,
  error: null,
  totalPages: null,
  currentPage: 1,
}

const loading = state => {
  return {
    ...state,
    fetchedSearchedMovies: [],
    isLoading: true
  }
}

const success = (state, action) => {
  const { results, total_pages, page } = action.payload.data
  return {
    ...state,
    isLoading: false,
    fetchedSearchedMovies: results,
    totalPages: total_pages,
    currentPage: page
  }
}

const fail = state => {
  return {
    ...state,
    isLoading: false,
    error: 'Request error...'
  }
}
const reset = () => {
  return INITIAL_STATE

}

export const searchedMovies = handleActions(
  {
    [fetchSearchMovies]: loading,
    [fetchSearchMovies.success]: success,
    [fetchSearchMovies.fail]: fail,
    [resetSearch]: reset,
  },
  INITIAL_STATE
)