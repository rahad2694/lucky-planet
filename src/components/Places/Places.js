import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css'

const Places = () => {
    const [destinations , setDestinations] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDestinations(data))
    },[]);
    // console.log(destinations);
    return (
        <div className='place-container row gx-3'>
            {
                destinations.map( destination => <Place key={destination.id} data ={destination}></Place>)
            }
        </div>
    );
};

export default Places;