import React from 'react'
import CardItem from '@components/CardItem'
export const CardList = ({ data = [] }) => {
  return (
    <div>
      {
        data.length === 0 ?
          <p>Movies Empty</p>
          :
          data.map(movie => (
            <CardItem />
          ))
      }
    </div>
  )
}