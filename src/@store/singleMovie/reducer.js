import {
  fetchSingleMovie,
  resetSingleMovie,
  fetchSingleMovieCast,
  fetchSimilarMovies
} from './actions'
import { handleActions } from 'redux-actions'

const INITIAL_STATE = {
  fetchedSingleMovie: [],
  similarMovies: [],
  cast: [],
  isLoading: false,
  isLoadingCast: false,
  isLoadingSimilarMovies: false,
  error: null,
  errorCast: null,
  errorSimilarMovies: null,
}

const loadingMovieHandler = state => {
  return {
    ...state,
    isLoading: true,
    error: null
  }
}
const loadingCastHandler = state => {
  return {
    ...state,
    isLoadingCast: true,
    errorCast: null
  }
}
const loadingSimilarMoviesHandler = state => {
  return {
    ...state,
    isLoadingSimilarMovies: true,
    errorSimilarMovies: null
  }
}

const successMovieHandler = (state, action) => {
  const { data } = action.payload
  return {
    ...state,
    isLoading: false,
    fetchedSingleMovie: data,
  }
}
const successCastHandler = (state, action) => {
  const { cast } = action.payload.data
  return {
    ...state,
    isLoadingCast: false,
    cast: [cast[0].name, cast[1].name, cast[2].name],
  }
}
const successSimilarMoviesHandler = (state, action) => {
  const { results } = action.payload.data
  return {
    ...state,
    isLoadingSimilarMovies: false,
    similarMovies: [results[0], results[1], results[2], results[3], results[4]],
  }
}

const failMovieHandler = (state, action) => {
  return {
    ...state,
    isLoading: false,
    error: true
  }
}
const failCastHandler = (state, action) => {
  return {
    ...state,
    isLoadingCast: false,
    errorCast: true
  }
}
const failSimilarMoviesHandler = (state, action) => {
  return {
    ...state,
    isLoadingSimilarMovies: false,
    errorSimilarMovies: true
  }
}

const reset = state => {
  return INITIAL_STATE
}

export const singleMovie = handleActions(
  {
    [fetchSingleMovie]: loadingMovieHandler,
    [fetchSingleMovie.success]: successMovieHandler,
    [fetchSingleMovie.fail]: failMovieHandler,
    [fetchSingleMovieCast]: loadingCastHandler,
    [fetchSingleMovieCast.success]: successCastHandler,
    [fetchSingleMovieCast.fail]: failCastHandler,
    [fetchSimilarMovies]: loadingSimilarMoviesHandler,
    [fetchSimilarMovies.success]: successSimilarMoviesHandler,
    [fetchSimilarMovies.fail]: failSimilarMoviesHandler,
    [resetSingleMovie]: reset
  },
  INITIAL_STATE
)