import React from 'react'
import { connect } from 'react-redux'
import { Box, Button } from '@mui/material'
import CustomButton from '@components/CustomButton'
import { setCurrentPage } from '@store/movies/actions'
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  if (!totalPages) return null

  const toTop = () => {
    window.scrollTo(0, 0)
  }
  const first = () => {
    setCurrentPage(1)
    toTop()
  }
  const prev = () => {
    setCurrentPage(currentPage - 1)
    toTop()
  }
  const next = (num) => {
    setCurrentPage(currentPage + num)
    toTop()
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomButton title={'<'} onClick={prev}></CustomButton>
      {
        currentPage < 3 ?
          null :
          <CustomButton title={1} onClick={first}></CustomButton>
      }
      {
        currentPage === 1 ?
          null
          :
          <CustomButton title={currentPage - 1} onClick={next}></CustomButton>
      }
      <CustomButton title={currentPage} style={'#757575'}></CustomButton>
      <CustomButton title={currentPage + 1} onClick={() => next(1)}></CustomButton>
      <CustomButton title={currentPage + 2} onClick={() => next(2)}></CustomButton>
      <CustomButton title={'>'} onClick={next}></CustomButton>
    </Box>
  )
}

const mapDispatchToProps = dispatch => ({
  setCurrentPage: page => dispatch(setCurrentPage(page)),
})

export default connect(null, mapDispatchToProps)(Pagination)