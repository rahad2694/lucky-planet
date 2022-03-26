import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    return (
        <nav className='py-3 mb-2 nav-style sticky-top'>
            <h1 className='text-white'>Interplanetary spaceflight <FontAwesomeIcon icon={faRocket} /></h1>
            <small className='text-white'>Expedite with Convenience</small>
        </nav>
    );
};

export default Header;

// const fakeDb = [
//     {id:'1', title:'Earth' ,distance:'149.21 million km', OrbitalPeriod: '365 days', tourCost:'25000'},
//     {id:'2', title:'Mars' ,distance:'227.9 million km', OrbitalPeriod: '687 days', tourCost:'50000'},
//     {id:'3', title:'Jupiter' ,distance:'778.5 million km', OrbitalPeriod: '12 years', tourCost:'75000'},
//     {id:'4', title:'Mercury' ,distance:'57.72 million km', OrbitalPeriod: '88 days', tourCost:'35000'},
//     {id:'5', title:'Venus' ,distance:'108.2 million km', OrbitalPeriod: '225 days', tourCost:'45000'},
//     {id:'6', title:'Saturn' ,distance:'1.434 billion km', OrbitalPeriod: '29 years', tourCost:'95000'},
//     {id:'7', title:'Neptune' ,distance:'4.495 billion km', OrbitalPeriod: '165 years', tourCost:'150000'},
//     {id:'8', title:'Uranus' ,distance:'2.871 billion km', OrbitalPeriod: '84 years', tourCost:'65000'},
//     {id:'9', title:'Callisto' ,distance:'2628.3 million km', OrbitalPeriod: '17 days', tourCost:'15000'},
//     {id:'10', title:'Moon' ,distance:'227.9 million km', OrbitalPeriod: '27 days', tourCost:'50000'},
//     {id:'11', title:'Europa' ,distance:'384,400 km', OrbitalPeriod: '687 days', tourCost:'25000'},
//     {id:'12', title:'Ganymede' ,distance:'628.3 million km', OrbitalPeriod: '7.5 days', tourCost:'50000'},
// ]