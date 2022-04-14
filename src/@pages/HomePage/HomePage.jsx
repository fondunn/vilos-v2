import React, { useEffect } from 'react'

import Spinner from '@components/Spinner'
import Pagination from '@components/Pagination/Pagination'
import CardList from '@components/CardList'
import { Box } from '@mui/material'

import { connect } from 'react-redux'
import { fetchMovies } from '@store/movies/actions'


const HomePage = ({ movies, fetchMovies, isLoading, currentPage }) => {
  useEffect(() => {

    fetchMovies(currentPage)


  }, [currentPage])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 70px)',
        backgroundColor: '#0A0A0D'
      }}

    >
      {
        movies.length === 0 || isLoading ?
          <Spinner />
          :
          <CardList data={movies} />
      }
      <Pagination totalPages={17} currentPage={currentPage} />
    </Box>
  )
}

const mapStateToProps = state => ({
  movies: state.movies.fetchedMovies,
  isLoading: state.movies.isLoading,
  currentPage: state.movies.currentPage
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: (page) => dispatch(fetchMovies(page)),

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)