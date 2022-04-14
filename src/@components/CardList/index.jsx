import React from 'react'
import CardItem from '@components/CardItem'

import { Box, Grid } from '@mui/material'
import { connect } from 'react-redux'


const CardList = ({ data = [], message = 'Movies Empty' }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        m: '20px 0 20px 0'
      }}
    >
      {
        data.length === 0 ?
          <p>{message}</p>
          :
          <Grid container spacing={1}>
            {
              data.map((movie, id) => (
                <Grid
                  key={id}
                  item xs={3}
                  sx={{ m: 0, display: 'flex', justifyContent: 'center' }}
                >
                  <CardItem data={movie} />
                </Grid>
              ))
            }
          </Grid>
      }
    </Box>
  )
}

// const mapStateToProps = state => ({
//   data: state.movies.fetchedMovies
// })

// export default connect(mapStateToProps)(CardList)
export default CardList