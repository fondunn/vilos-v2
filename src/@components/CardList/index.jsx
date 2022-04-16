import React from 'react'
import CardItem from '@components/CardItem'
import { Box, Grid } from '@mui/material'
import './styles.scss'
const CardList = ({ data = [], message = 'Movies Empty' }) => {
  return (
    <Box className='cardListContainer'>
      {
        data.length === 0 ?
          <p>{message}</p>
          :
          <Grid container rowSpacing={1}>
            {
              data.map((movie, id) => (
                <Grid
                  key={id}
                  item
                  xs={6}
                  sm={4}
                  md={3}
                  className='cardListGrid'
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

export default CardList