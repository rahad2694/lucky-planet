import React, { useEffect, useState } from 'react';

const Places = () => {
    const [count , setCount] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCount(data))
    },[]);
    console.log(count);
    return (
        <div>
            <h2>I am from places</h2>
        </div>
    );
};

export default Places;