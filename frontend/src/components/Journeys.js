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
        
        
    },[list])


    const fetchJourneys =  async () => {
        
        try {
            const response = await fetch(`http://localhost:5000/api/journeys?page=${page}&limit=20`)
            const journeys = await response.json();
            setList(journeys)
            setLoading(false)
            
        } catch (err) {
            console.log(err) 
        }
    };

    
    



  return (
    <div className='journeys'>
        {loading ? null : list.results.map((item, index) => 
            <JourneyItem
            key={index} 
            dep = {item['Departure station name']}
            ret = {item['Return station name']}
            distance = {parseFloat(item['Covered distance (m)']/1000).toFixed(2).replace('.',',')}
            time = {parseFloat(item['Duration (s)']/60).toFixed(2).replace('.',',')} 
            />
        )}
        
    </div>
  )
}

export default Journeys