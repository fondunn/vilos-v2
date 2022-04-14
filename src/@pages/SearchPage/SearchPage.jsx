import React, { useEffect, useState } from 'react'
import CustomButton from '@components/CustomButton';
import CardList from '@components/CardList';
import { Box, TextField } from '@mui/material'
import { connect } from 'react-redux'
import { fetchSearchMovies } from '@store/searchMovie/actions'
const SearchPage = ({ searchedMovies, getSearchedMovies }) => {
  const onFormSubmit = e => {
    e.preventDefault()
    console.log('form sub and form >', e.target[0].value)
    getSearchedMovies(e.target[0].value)
  }

  console.log('searched movies: ', searchedMovies)

  useEffect(() => {
    // getSearchedMovies('spider')
    console.log('use effect!')
  }, [])

  return (
    <Box sx={{ height: 'calc(100vh - 70px)', pt: '20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component='form'
          onSubmit={onFormSubmit}
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div>
            <TextField

              id="outlined-search"
              label="Search movie"
              type="search"
              size="small"
            />
          </div>
          <CustomButton title='Search' />
        </Box>
      </Box>
      <Box>
        <CardList data={searchedMovies} message={'Enter Movie Title'} />
      </Box>
    </Box>

  )
}

const mapStateToProps = (state) => ({
  searchedMovies: state.searchedMovies.fetchedSearchedMovies
})

const mapDispatchToProps = dispatch => ({
  getSearchedMovies: title => dispatch(fetchSearchMovies(title))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)