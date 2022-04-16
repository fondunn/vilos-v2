import React, { useEffect } from 'react'
import './styles.scss'
import Spinner from '@components/Spinner'
import Pagination from '@components/Pagination/Pagination'
import CardList from '@components/CardList'
import { Box } from '@mui/material'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchMovies, movies, isLoading, currentPage } from '@store/movies'
import { usePrevious } from '@hooks'
const HomePage = ({ movies, fetchMovies, isLoading, currentPage }) => {

  const prevPage = usePrevious(currentPage)

  useEffect(() => {

    console.log(':::prev page :', prevPage)
    console.log(':::current page :', currentPage)
    if (movies.length === 0 || currentPage !== prevPage) {
      fetchMovies(currentPage)
    }

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
        <Pagination totalPages={17} currentPage={currentPage} />
      </Box>
    </Box>
  )
}

const mapStateToProps = createStructuredSelector({
  movies,
  isLoading,
  currentPage,
})

const mapDispatchToProps = dispatch => ({
  fetchMovies: (page) => dispatch(fetchMovies(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)