import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardMedia } from '@mui/material'
import cover from '@assets/cover.jpg'
import { getPoster } from '@utils/const'
const CardItemSmall = ({ imgPath, id, title }) => {
  const link = `/detail/${title}/?${id}`
  const poster = getPoster('small', imgPath)
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
        </Card>
      </Box>
    </Link>
  )
}

export default CardItemSmall