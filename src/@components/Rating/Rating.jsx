import React from 'react'
import './style.scss'
import star from '@assets/star.png'
export const Rating = ({ rating = 5.5 }) => {
  const num = 10

  const currentRating = rating

  const stars = [...Array(num)]
  return (
    <div className='ratingWrapper'>
      {
        stars.map((star, id) => {
          if (currentRating > id && currentRating < id + 1) {
            return <span key={id} className='halfStar' data-content='&#9733;'>&#9733;</span>
          }
          if (id + 1 > currentRating) {
            return <span key={id} className='emptyStar'>&#9733;</span>
          } else {
            return <span key={id} className='star'>&#9733;</span>
          }

        })
      }
    </div>
  )
}