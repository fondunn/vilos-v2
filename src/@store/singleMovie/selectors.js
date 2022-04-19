import { createSelector } from 'reselect'

const INITIAL_STATE = state => state.singleMovie

export const fetchedSingleMovie = createSelector(INITIAL_STATE, state => state.fetchedSingleMovie)
export const similarMovies = createSelector(INITIAL_STATE, state => state.similarMovies)
export const cast = createSelector(INITIAL_STATE, state => state.cast)
export const isLoading = createSelector(INITIAL_STATE, state => state.isLoading)
export const isLoadingCast = createSelector(INITIAL_STATE, state => state.isLoadingCast)
export const isLoadingSimilarMovies = createSelector(INITIAL_STATE, state => state.isLoadingSimilarMovies)
export const error = createSelector(INITIAL_STATE, state => state.error)
export const errorCast = createSelector(INITIAL_STATE, state => state.errorCast)
export const errorSimilarMovies = createSelector(INITIAL_STATE, state => state.errorSimilarMovies)