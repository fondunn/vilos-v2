import { fetchMovies } from './actions'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  fetchedMovies: [],
  isLoading: false,
  currentPage: 1,
  totalPages: null,
  error: null,
}

const loading = state => {
  console.log('loading reducer started!')
  return {
    ...state,
    isLoading: true
  }
}

const success = (state, action) => {
  const { results, page, total_pages } = action.payload.data
  return {
    ...state,
    isLoading: false,
    fetchedMovies: results,
    currentPage: page,
    totalPages: total_pages
  }
}

const fail = state => {
  return {
    ...state,
    isLoading: false,
    error: 'Request error...'
  }
}

export const movies = handleActions(
  {
    [fetchMovies]: loading,
    [fetchMovies.success]: success,
    [fetchMovies.fail]: fail,
  },
  INITIAL_STATE
)