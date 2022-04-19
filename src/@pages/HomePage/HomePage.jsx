import React, { useEffect } from 'react'
import './styles.scss'
import Spinner from '@components/Spinner'
import Pagination from '@components/Pagination/Pagination'
import CardList from '@components/CardList'
import { Box } from '@mui/material'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchMovies, movies, isLoading, currentPage, totalPages } from '@store/movies'

const HomePage = ({ movies, fetchMovies, isLoading, currentPage, totalPages }) => {
  useEffect(() => {
    fetchMovies(currentPage)
  }, [currentPage])

  return (
    <Box className='mainContainer'>
      <Box className='content'>
        {
          movies.length === 0 || isLoading ?
            <Spinner />
            :
            <CardList data={movies} />
        }
      </Box>
      <Box className='pagination' >
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </Box>
    </Box>
  )
}

const mapStateToProps = createStructuredSelector({
  movies: movies,
  isLoading: isLoading,
  currentPage: currentPage,
  totalPages: totalPages,
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: (page) => dispatch(fetchMovies(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)