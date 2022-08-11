import React from 'react'

const JourneyItem = ({dep, ret, distance, time}) => {
  return (
    <div className='journey-item'>
          <p>{dep}</p>
          <p>{ret}</p>
          <p>{distance}km</p>
          <p>{time}min</p>
  
      </div>
  )
}

export default JourneyItem