import React from 'react'
import './styles.scss'
import CardItemSmall from '@components/CardItemSmall/CardItemSmall'

const CardListRow = ({ data }) => {
  console.log(data)
  return (

    <div className='cardListRowContainer'>
      {
        !data ?
          <p>no data</p> :
          data.map(card => (
            <CardItemSmall
              key={card.id}
              imgPath={card.poster_path}
              id={card.id}
              title={card.title}
              loading='lazy'
            />
          ))
      }
    </div>
  )
}

export default CardListRow