import { createSelector } from 'reselect'

const INITIAL_STATE = state => state.searchedMovies

export const movies = createSelector(INITIAL_STATE, state => state.fetchedSearchedMovies)
export const isLoading = createSelector(INITIAL_STATE, state => state.isLoading)
export const currentPage = createSelector(INITIAL_STATE, state => state.currentPage)
export const totalPages = createSelector(INITIAL_STATE, state => state.totalPages)
export const error = createSelector(INITIAL_STATE, state => state.error)