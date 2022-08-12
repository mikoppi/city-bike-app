import React, { useEffect, useState } from 'react'
import JourneyItem from './JourneyItem';


const Journeys = () => {
    const [list, setList] = useState();
    const [page, setPage ] = useState(1)
    const [loading, setLoading] = useState(true);
   
    

    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        setPage(1)
        fetchJourneys()
        
        
    },[])


    const fetchJourneys =  async () => {
        
        try {
            const response = await fetch(`${API_URL}/journeys?page=${page}&limit=20`)
            const journeys = await response.json();
            setList(journeys)
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
            const response = await fetch(`${API_URL}/journeys?page=${page+(change)}&limit=20`)
            const data = await response.json()
            setList(data)
            setLoading(false);
        }
    }
  
    
    



  return (
    <div className='journeys'>
        {loading ? null : <div className='pagination'>
          {page === 1 ? null : <button onClick={() =>changePage(-1)}>&laquo;</button>}
          <p> Page {page} of {list.last}</p>
          {page === parseInt(list.last) ? null : <button onClick={() =>changePage(1)} >&raquo;</button>}
        </div>}
        <div className='titles'>
            <h3>Departure</h3>
            <h3>Return</h3>
            <h3>Distance (km)</h3>
            <h3>Duration (min)</h3>
        </div>
        {loading ? null : list.results.map((item, index) => 
            <JourneyItem
            key={index} 
            dep = {item['Departure station name']}
            ret = {item['Return station name']}
            distance = {parseFloat(item['Covered distance (m)']/1000).toFixed(2).replace('.',',')}
            time = {parseFloat(item['Duration (s)']/60).toFixed(2).replace('.',',')} 
            />
        )}
        {loading ? null : <div className='pagination'>
          {page === 1 ? null : <button onClick={() =>changePage(-1)}>&laquo;</button>}
          <p> Page {page} of {list.last}</p>
          {page === parseInt(list.last) ? null : <button onClick={() =>changePage(1)} >&raquo;</button>}
        </div>}
        
    </div>
  )
}

export default Journeys