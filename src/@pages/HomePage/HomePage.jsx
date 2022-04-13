import React, { useEffect } from 'react'

import Spinner from '@components/Spinner'
import CardList from '@components/CardList'
import { Box } from '@mui/material'

import { connect } from 'react-redux'
import { fetchMovies } from '@store/movies/actions'


const HomePage = ({ movies, fetchMovies }) => {
  useEffect(() => {
    // fetchMovies(5)
  }, [])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 70px)'
      }}

    >
      {
        movies.length !== 0 ?
          <Spinner />
          :
          <CardList data={[1]} />
      }
    </Box>
  )
}

const mapStateToProps = state => ({
  movies: state.movies.fetchedMovies
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: (page) => dispatch(fetchMovies(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)