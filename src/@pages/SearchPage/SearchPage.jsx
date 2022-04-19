import React, { useEffect } from 'react'
import './styles.scss'
import CustomButton from '@components/CustomButton';
import CardList from '@components/CardList';
import { Box, TextField } from '@mui/material'
import { connect } from 'react-redux'
import { fetchSearchMovies, movies, resetSearch, isLoading } from '@store/searchMovie'
import Spinner from '@components/Spinner'
import { createStructuredSelector } from 'reselect';

const SearchPage = ({ movies, getSearchedMovies, resetSearch, isLoading }) => {
  const onFormSubmit = e => {
    e.preventDefault()
    getSearchedMovies(e.target[0].value)
  }

  useEffect(() => {
    return () => {
      resetSearch()
    }
  }, [])

  return (
    <Box className='searchPageContainer'>
      <Box className='searchPageWrapper'>
        <Box
          component='form'
          onSubmit={onFormSubmit}
          className='searchForm'
        >
          <div>
            <TextField
              label="Search movie"
              type="search"
              size="small"
            />
          </div>
          <CustomButton title='Search' />
        </Box>
      </Box>
      <Box>
        {
          isLoading ?
            <Spinner /> :
            <CardList data={movies} message={'Enter Movie Title'} />
        }
      </Box>
    </Box>
  )
}

const mapStateToProps = createStructuredSelector({
  movies: movies,
  isLoading: isLoading
})

const mapDispatchToProps = dispatch => ({
  getSearchedMovies: title => dispatch(fetchSearchMovies(title)),
  resetSearch: () => dispatch(resetSearch())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)