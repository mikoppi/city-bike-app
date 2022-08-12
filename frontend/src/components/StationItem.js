import React, { useState } from 'react'
import Details from './Details'


const StationItem = ({ item}) => {
    const [detailsOpen, setDetailsOpen] = useState(false)

    const showDetails = () => {
        setDetailsOpen((prevState) => !prevState)
    }

  return (
    <div className='station-item'>
        <button onClick={showDetails} >{item.Name}</button>
        <div className='details-wrapper'>
        <>{detailsOpen ? <Details item={item} /> : null }</>
        </div>
    </div>
  )
}

export default StationItem