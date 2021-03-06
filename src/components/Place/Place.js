import React from 'react';
import './Place.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';

const Place = (props) => {
    const {id, title, distance,OrbitalPeriod,tourCost } = props.data;
    const {addToListHandle} = props;
    let imgSource = `../../images/${id}-${title}.jpg`;
    return (
        <div className='text-white individual-place col-12 col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4'>
            <h2>Place : {title}</h2>
            <img className='image w-50 my-3' src={imgSource} alt="Destination" />
            <h6>Distance from Sun: {distance}</h6>
            <h4>Orbital Period: {OrbitalPeriod}</h4>
            <h4>Travel Cost : <span className='display-5 font-weight-bold'>${tourCost}</span></h4>
            <button onClick={()=>addToListHandle(props.data)} className='btn btn-primary my-3'>Add to List <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Place;