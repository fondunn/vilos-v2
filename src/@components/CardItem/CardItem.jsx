import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Rating from '@components/Rating'

import cover from '@assets/cover.jpg'

import { getYear } from '@utils/const/getYear'
export const CardItem = ({ data }) => {
  if (!data) return null
  const { id, title, vote_average, release_date, poster_path, name, first_air_date } = data
  const year = getYear(release_date || first_air_date)

  const link = `/detail/${title}?${id}`
  return (
    <Link to={link}>
      <Box>
        <Card sx={{ width: 210, height: 362 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          />
          <Box
            sx={{
              height: 38,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            {title || name}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Rating rating={vote_average} />
            <Typography variant="h6" component="div" sx={{ margin: '0 5px 0 5px', fontSize: '1rem' }}>
              {year}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Link>
  )
}