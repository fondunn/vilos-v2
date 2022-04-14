import { fetchSingleMovie } from './actions'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  fetchedSingleMovie: [],
  isLoading: false,
  error: null,
}

const loading = state => {
  return {
    ...state,
    isLoading: true,
    error: null
  }
}

const success = (state, action) => {
  const { data } = action.payload
  return {
    ...state,
    isLoading: false,
    fetchedSingleMovie: data,
  }
}

const fail = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: true
  }
}

export const singleMovie = handleActions(
  {
    [fetchSingleMovie]: loading,
    [fetchSingleMovie.success]: success,
    [fetchSingleMovie.fail]: fail,
  },
  INITIAL_STATE
)