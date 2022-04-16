import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardMedia, Typography, CardContent } from '@mui/material'
import cover from '@assets/cover.jpg'
const CardItemSmall = ({ imgPath, id, title }) => {
  const link = `/detail/${title}/?${id}`
  const poster = `http://image.tmdb.org/t/p/w185${imgPath}`
  return (
    <Link to={link}>
      <Box>
        <Card sx={{ width: 100, height: 180 }}>
          <CardMedia
            component="img"
            alt={`title`}
            height="300"
            image={poster || cover}
            loading='lazy'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Link>
  )
}

export default CardItemSmall