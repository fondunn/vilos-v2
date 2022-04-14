import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchSingleMovie } from '@store/singleMovie/actions'
import { removeFirst } from '@utils/const/removeFirst'
import { getYear } from '@utils/const/getYear'
import cover from '@assets/cover.jpg'
import { Box, Card, CardMedia, Typography } from '@mui/material'
function DetailPage({ movie, getMovie, error }) {

  // if (error !== null) return <p>Something went wrong...</p>

  const { title,
    release_date,
    production_countries = [],
    genres = [], runtime,
    poster_path = cover,
    backdrop_path = cover,
    overview
  } = movie
  const year = getYear(release_date)
  const poster = 'https://image.tmdb.org/t/p/w500' + poster_path
  const bigImage = 'https://image.tmdb.org/t/p/w1280' + backdrop_path
  console.log(movie)
  const location = useLocation()
  const id = removeFirst(location.search)
  const tagList = ['title', 'year', 'country', 'genre', 'runtime', 'cast']
  useEffect(() => {
    getMovie(id)
  }, [])

  return (


    <Box sx={{
      height: 'calc(100vh - 70px)',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: `url(${bigImage})`,
      backgroundSize: 'cover'
    }}>
      {
        error ?
          <p>Oops...</p>
          :
          <Box
            sx={{
              display: 'flex',
              backgroundColor: 'rgba(0, 0, 0, .7)',
              m: '16px',
              p: '8px'
            }}
          >
            <Card sx={{ width: 200 }}>
              <CardMedia
                component="img"
                height="300"
                image={poster}
                alt={title}
              />
            </Card>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px' }}>

              <Box sx={{
                display: 'flex',

              }}>

                <Box sx={{ width: '100px', ml: '10px' }}>
                  {
                    tagList.map((tag, id) => {
                      if (id % 2 === 0) {

                        return <Typography key={id} variant="body2" sx={{ backgroundColor: '#90a4ae', pl: '6px' }}>
                          {tag}
                        </Typography>

                      } else return <Typography key={id} variant="body2" sx={{ pl: '6px' }}>
                        {tag}
                      </Typography>
                    })
                  }
                </Box>

                <Box>
                  <Typography variant="body2" sx={{ backgroundColor: '#90a4ae' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" >
                    {year}
                  </Typography>
                  <Typography variant="body2" sx={{ backgroundColor: '#90a4ae' }}>
                    {
                      production_countries.map(country => (
                        country.iso_3166_1
                      ))
                    }
                  </Typography>
                  <Typography variant="body2" >
                    {
                      genres.map(genre => (
                        genre.name
                      ))
                    }
                  </Typography>
                  <Typography variant="body2" sx={{ backgroundColor: '#90a4ae' }}>
                    {runtime}
                  </Typography>
                </Box>

              </Box>

              <Box sx={{ m: '10px' }}>

                <Typography variant="body2" >
                  {overview}
                </Typography>
              </Box>
            </Box>
          </Box>
      }
    </Box>

  )
}

const mapStateToProps = state => ({
  movie: state.singleMovie.fetchedSingleMovie,
  error: state.singleMovie.error
})

const mapDispatchToProps = dispatch => ({
  getMovie: id => dispatch(fetchSingleMovie(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage)