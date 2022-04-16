import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  fetchSingleMovie,
  resetSingleMovie,
  fetchSingleMovieCast,
  fetchSimilarMovies
} from '@store/singleMovie/actions'
import { removeFirst, getYear, minToHour } from '@utils/const'
import cover from '@assets/cover.jpg'
import { Box, Card, CardMedia, Typography } from '@mui/material'
import BackButton from '@components/BackButton/BackButton'
import Spinner from '@components/Spinner'
import CardListRow from '@components/CardListRow/CardListRow'
import './styles.scss'
import YouTube from 'react-youtube'
function DetailPage({ movie, getMovie, getCast, error, resetData, isLoading, cast, getSimilarMovies, similarMovies }) {
  const { title,
    release_date,
    production_countries = [],
    genres = [], runtime,
    poster_path,
    backdrop_path,
    overview,
    videos,
  } = movie
  const year = getYear(release_date)
  const poster = !poster_path ? cover : 'https://image.tmdb.org/t/p/w500' + poster_path
  const bigImage = !backdrop_path ? null : 'https://image.tmdb.org/t/p/w1280' + backdrop_path
  const location = useLocation()
  const id = removeFirst(location.search)
  const trailer = !videos ? null : videos.results.find(video => video.name === 'Official Trailer')
  console.log(trailer)
  useEffect(() => {
    getMovie(id)
    getCast(id)
    getSimilarMovies(id)
    return () => {
      resetData()
    }
  }, [id])
  return (
    <Box
      className='detailPage'
      sx={{ backgroundImage: `url(${null || bigImage})` }}>
      <BackButton />
      {
        error ?
          <h1>Oops... Something went wrong</h1>
          :
          <Box className='detailPageWrapper'>
            <Box className='detailPageContent'>
              <Box className='infoBlock'>
                <Card className='imgWrapper'>
                  {
                    isLoading ?
                      <Spinner />
                      :
                      <CardMedia
                        component="img"
                        height="300"
                        image={poster}
                        alt={title}
                        loading='lazy'
                      />
                  }
                </Card>
                <Box className='infoWrapper'>
                  <Box className='info'>
                    <Box className='infoRow cbg'>
                      <Typography className='tag ' variant="body2">
                        title
                      </Typography>
                      <Typography variant="body2" className='data'>
                        {title}
                      </Typography>
                    </Box>
                    <Box className='infoRow '>
                      <Typography className='tag' variant="body2">
                        year
                      </Typography>
                      <Typography variant="body2" className='data'>
                        {year}
                      </Typography>
                    </Box>
                    <Box className='infoRow cbg'>
                      <Typography className='tag' variant="body2">
                        country
                      </Typography>
                      <Typography variant="body2" className='data'>
                        {
                          production_countries.map(country => (
                            <span className='genre'>{country.iso_3166_1}</span>
                          ))
                        }
                      </Typography>
                    </Box>
                    <Box className='infoRow'>
                      <Typography className='tag' variant="body2">
                        genre
                      </Typography>
                      <Typography variant="body2" className='data'>
                        {
                          genres.map(genre => (
                            <span key={genre} className='genre'>{genre.name}</span>
                          ))
                        }
                      </Typography>
                    </Box>
                    <Box className='infoRow cbg'>
                      <Typography className='tag ' variant="body2">
                        runtime
                      </Typography>
                      <Typography variant="body2" className='data'>
                        {minToHour(runtime)}
                      </Typography>
                    </Box>
                    <Box className='infoRow'>
                      <Typography className='tag' variant="body2">
                        cast
                      </Typography>
                      <Typography variant="body2" className='data'>
                        {
                          cast.map(actor => (
                            <p className='infoText'>{actor}</p>
                          ))
                        }
                      </Typography>
                    </Box>
                  </Box>
                  <Box className='overviewWrapper'>
                    <Typography variant="body2" className='overview' >
                      {overview}
                    </Typography>
                  </Box>
                </Box>

              </Box>
              {
                trailer ?
                  <Box className='trailer'>
                    <YouTube
                      videoId={trailer.key}
                    />
                  </Box>
                  : null
              }
            </Box>
            <Box className='detailPageSimilarMovies'>
              <Typography variant="body2">
                Similar Movies
              </Typography>
              <CardListRow data={similarMovies} />
            </Box>
          </Box>
      }
    </Box>
  )
}

const mapStateToProps = state => ({
  movie: state.singleMovie.fetchedSingleMovie,
  cast: state.singleMovie.cast,
  similarMovies: state.singleMovie.similarMovies,
  error: state.singleMovie.error,
  isLoading: state.singleMovie.isLoading
})

const mapDispatchToProps = dispatch => ({
  getMovie: id => dispatch(fetchSingleMovie(id)),
  getCast: id => dispatch(fetchSingleMovieCast(id)),
  getSimilarMovies: id => dispatch(fetchSimilarMovies(id)),
  resetData: () => dispatch(resetSingleMovie())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage)