import { combineReducers } from "redux"
import { movies } from "@store/movies/reducer"
import { singleMovie } from "@store/singleMovie/reducer"
import { searchedMovies } from '@store/searchMovie/reducer'
const reducers = combineReducers({
  movies: movies,
  singleMovie: singleMovie,
  searchedMovies: searchedMovies
})

export default reducers