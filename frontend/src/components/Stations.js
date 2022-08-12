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
        
        
    },[])


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

    const changePage = async (change) => {
      setLoading(true)
      if((page+change) <= 0) {
          setLoading(false)
      } else {
          setPage(page+(change))
          setLoading(true)
          const response = await fetch(`${API_URL}/stations?page=${page+(change)}&limit=20`)
          const data = await response.json()
          setList(data)
          setLoading(false);
      }
  }

    
    



  return (
    <div className='stations'>
        {loading ? null : <div className='pagination'>
          {page === 1 ? null : <button onClick={() =>changePage(-1)}>&laquo;</button>}
          <p>Page {page} of {list.last}</p>
          {page === parseInt(list.last) ? null : <button onClick={() =>changePage(1)} >&raquo;</button>}
        </div>}
        {loading ? null : list.results.map((item, index) => 
            <StationItem
            key={index}
            item={item}
            />
        )}
        {loading ? null : <div className='pagination'>
          {page === 1 ? null : <button onClick={() =>changePage(-1)}>&laquo;</button>}
          <p>Page {page} of {list.last}</p>
          {page === parseInt(list.last) ? null : <button onClick={() =>changePage(1)} >&raquo;</button>}
        </div>}

        
    </div>
  )
}

export default Stations