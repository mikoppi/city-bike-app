import React, { useEffect, useState } from 'react'
import StationItem from './StationItem';


const Stations = () => {
    const [list, setList] = useState();
    const [page, setPage ] = useState(1)
    const [loading, setLoading] = useState(true);
   
    

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        setPage(1)
        fetchStations()
        
        
    },[list])


    const fetchStations =  async () => {
        
        try {
            const response = await fetch(`${API_URL}/stations?page=${page}&limit=20`)
            const stations = await response.json();
            setList(stations)
            setLoading(false)
            
        } catch (err) {
            console.log(err) 
        }
    };

    
    



  return (
    <div className='stations'>
        {loading ? null : list.results.map((item, index) => 
            <StationItem
            key={index}
            item={item}
            />
        )}
        
    </div>
  )
}

export default Stations