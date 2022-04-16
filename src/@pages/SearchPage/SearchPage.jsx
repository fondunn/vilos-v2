import React from 'react'
import './styles.scss'
import CustomButton from '@components/CustomButton';
import CardList from '@components/CardList';
import { Box, TextField } from '@mui/material'
import { connect } from 'react-redux'
import { fetchSearchMovies } from '@store/searchMovie/actions'

const SearchPage = ({ searchedMovies, getSearchedMovies }) => {
  const onFormSubmit = e => {
    e.preventDefault()
    getSearchedMovies(e.target[0].value)
  }

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