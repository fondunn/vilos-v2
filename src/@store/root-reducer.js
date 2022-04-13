import { combineReducers } from "redux"
import { movies } from "@store/movies/reducer"

const reducers = combineReducers({
  movies: movies,
})

export default reducers