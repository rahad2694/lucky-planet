import React from 'react';
import './CartItems.css'

const CartItems = (props) => {
    const {title, id, tourCost } = props.ietm;
    let imgSource = `../../images/${id}-${title}.jpg`;
    return (
        <div className='border p-2'>
            <div className='d-flex justify-content-between'>
                <img className='image-in-cart' src={imgSource} alt="" />
                <h5>{title}</h5>
                <button className='btn btn-danger'>X</button>
            </div>
        </div>
    );
};

export default CartItems;